import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MedicalItemQuery } from '@/store/queries';
import { Observable } from 'rxjs';
import { MedicalItemModel, DiseaseItemModel, EditDialogWithComponentData } from '@/shared/models';
import { GridOptions } from 'ag-grid-community';
import { MedicalService } from '@/store/services';
import { MedicalActionCellComponent } from '@/medical/components';
import { PageEvent, MatPaginator, MatDialog } from '@angular/material';
import { PagingService } from '@/core/services';
import { DateCellComponent } from '@/shared/components/cells';
import { FormControl, FormGroup } from '@angular/forms';
import { startWith, debounceTime } from 'rxjs/operators';
import { EditDialogComponent } from '@/shared/components/dialog';
import { EditMedicalDialogFormComponent } from '@/medical/components/dialog-forms';

@Component({
  selector: 'app-medical-page',
  templateUrl: './medical-page.component.html',
  styleUrls: ['./medical-page.component.scss']
})
export class MedicalPageComponent implements OnInit, AfterViewInit {
  gridOptions: GridOptions;
  models$: Observable<MedicalItemModel[]>;
  loading$: Observable<boolean>;

  medicalSearchGroup: FormGroup;
  medicalSearchCtrl = new FormControl('');

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  diseases$: Observable<DiseaseItemModel[]>;
  constructor(
    private medicalService: MedicalService,
    private medicalItemQuery: MedicalItemQuery,
    private pagingService: PagingService,
    private matDialog: MatDialog
  ) {
    this.setGridOptions();
    this.models$ = medicalItemQuery.selectAll();
    this.setFilter();
  }

  setFilter() {
    this.medicalSearchGroup = new FormGroup({
      groupId: new FormControl(''),
      keyword: new FormControl(''),
      diseaseCategories: new FormControl([]),
      type: new FormControl(null)
    });

    this.medicalSearchGroup.valueChanges.pipe(
      startWith({
      }),
      debounceTime(500)
    ).subscribe(() => {
      this.getMedicals();
    });
  }

  ngOnInit() {
    // this.medicalSearchCtrl.valueChanges.pipe(
    //   debounceTime(500),
    //   distinctUntilChanged()
    // ).subscribe(v => {
    //   this.getMedicals(v);
    // });
  }

  setGridOptions() {
    this.gridOptions = {
      columnDefs: [
        {
          headerName: 'Mã',
          field: 'sku',
          pinned: true
        },
        {
          headerName: 'Tên thuốc',
          field: 'name',
        },
        {
          headerName: 'Ngày cập nhật',
          field: 'updatedAt',
          cellRenderer: 'dateCell'
        },
        {
          headerName: 'Ngày tạo',
          field: 'createdAt',
          cellRenderer: 'dateCell'
        },
        {
          headerName: 'Thành phần',
          field: 'ingredient',
        },
        {
          headerName: 'Triệu chứng',
          field: 'symptom',
        },
        {
          headerName: 'Hành động',
          field: 'action',
          cellRenderer: 'actionCell',
          pinned: 'right',
        }
      ],
      frameworkComponents: {
        actionCell: MedicalActionCellComponent,
        dateCell: DateCellComponent,
      },
    };
  }


  getMedicals() {
    this.medicalService.getWithParam({
      page: 0,
      size: 20,
    });
  }

  ngAfterViewInit() {
    this.setPaging();
  }

  setPaging() {
    this.medicalItemQuery.selectPagination().subscribe(p => {
      this.pagingService.setPaginatorValue(this.paginator, p);
    });

    this.paginator.page.subscribe((p: PageEvent) => {
      this.medicalService.getWithParam(this.pagingService.changePage(p));
    });
  }
  create() {
    const dialogRef = this.matDialog.open(EditDialogComponent, {
      data: {
        label: 'Tạo thuốc',
        componentType: EditMedicalDialogFormComponent,
        content: {}
      } as EditDialogWithComponentData<Partial<MedicalItemModel>>
    });
    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.medicalService.create(res);
      }
    });
  }
}

import { Component, EventEmitter, AfterViewInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { GridOptions } from 'ag-grid-community';
import { DiseaseCategoryModel } from '@/shared/models/disease.model';
import { CategoryCellComponent, DateCellComponent } from '@/shared/components/cells';
import { EditDialogComponent } from '@/shared/components/dialog';
import { EditDiseaseCategoryDialogFormComponent } from '@/disease/components/dialog-forms';
import { EditDialogWithComponentData } from '@/shared/models';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent, MatPaginator } from '@angular/material';
import { PagingService } from '@/core/services';
import { DiseaseCategoryActionCellComponent } from '@/disease/components/table-cells';
import { DiseaseCategoryService } from '@/store/services';
import { DiseaseCategoryQuery } from '@/store/queries';

@Component({
  selector: 'app-disease-category-page',
  templateUrl: './disease-category-page.component.html',
  styleUrls: ['./disease-category-page.component.scss']
})
export class DiseaseCategoryPageComponent implements AfterViewInit {

  gridOptions: GridOptions;
  models$: Observable<DiseaseCategoryModel[]>;
  loading$: Observable<boolean>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    private categoryService: DiseaseCategoryService,
    private categoryQuery: DiseaseCategoryQuery,
    private matDialog: MatDialog,
    private pagingService: PagingService
  ) {
    this.setGridOptions();
    this.getCategories();
    this.models$ = categoryQuery.selectAll();
    this.loading$ = categoryQuery.selectLoading();
  }
  setGridOptions() {
    this.gridOptions = {
      columnDefs: [
        {
          headerName: 'Tên',
          field: 'name',
          pinned: true
        },
        {
          headerName: 'Mô tả',
          field: 'description',
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
          headerName: 'Hành động',
          field: 'action',
          cellRenderer: 'actionCell',
          pinned: 'right',
        }
      ],
      frameworkComponents: {
        actionCell: DiseaseCategoryActionCellComponent,
        dateCell: DateCellComponent
      },
    };
  }

  getCategories() {
    this.categoryService.getWithParam({
      page: 0,
      size: 10
    });
  }

  create() {
    const dialogRef = this.matDialog.open(EditDialogComponent, {
      data: {
        label: 'Tạo danh mục bệnh',
        componentType: EditDiseaseCategoryDialogFormComponent,
        content: {}
      } as EditDialogWithComponentData<Partial<DiseaseCategoryModel>>
    });
    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.categoryService.create(res);
      }
    });
  }

  ngAfterViewInit() {
    this.setPaging();
  }

  setPaging() {
    this.categoryQuery.selectPagination().subscribe(p => {
      this.pagingService.setPaginatorValue(this.paginator, p);
    });

    this.paginator.page.subscribe((p: PageEvent) => {
      this.categoryService.getWithParam(this.pagingService.changePage(p));
    });
  }

}

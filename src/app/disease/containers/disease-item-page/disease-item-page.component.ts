import { Component, EventEmitter, ViewChild, AfterViewInit } from '@angular/core';
import { Observable, combineLatest } from 'rxjs';
import { DiseaseItemService, DiseaseCategoryService } from '@/store/services';
import { DiseaseItemQuery, DiseaseCategoryQuery } from '@/store/queries';
import { GridOptions } from 'ag-grid-community';
import { DiseaseItemModel, DiseaseCategoryModel } from '@/shared/models/disease.model';
import { CategoryCellComponent, DateCellComponent } from '@/shared/components/cells';
import { EditDialogComponent } from '@/shared/components/dialog';
import { EditDiseaseItemDialogFormComponent } from '@/disease/components/dialog-forms';
import { EditDialogWithComponentData } from '@/shared/models';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent, MatPaginator } from '@angular/material';
import { PagingService } from '@/core/services';
import { DiseaseItemActionCellComponent } from '@/disease/components/table-cells';
import { defaultGridOptions } from '@/shared/constant/ag-grid/default-grid-options';
import { FormControl } from '@angular/forms';
import { startWith, withLatestFrom, map } from 'rxjs/operators';

@Component({
  selector: 'app-disease-item-page',
  templateUrl: './disease-item-page.component.html',
  styleUrls: ['./disease-item-page.component.scss']
})
export class DiseaseItemPageComponent implements AfterViewInit {


  gridOptions: GridOptions;
  models$: Observable<DiseaseItemModel[]>;
  selectPageSize$: Observable<number>;
  selectPageLength$: Observable<number>;

  selectCategoryCtrl = new FormControl('');
  categories$ = new Observable<DiseaseCategoryModel[]>();

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  pageIndex$: Observable<number>;
  loading$: Observable<boolean>;

  constructor(
    private itemService: DiseaseItemService,
    private categoryService: DiseaseCategoryService,
    private categoryQuery: DiseaseCategoryQuery,
    private itemQuery: DiseaseItemQuery,
    private matDialog: MatDialog,
    private pagingService: PagingService
  ) {
    this.setGridOptions();
    this.getItems();
    this.getCategories();
    this.models$ = itemQuery.selectAll();
    this.loading$ = itemQuery.selectLoading();
    this.categories$ = this.categoryQuery.selectAll();
    this.selectPageSize$ = itemQuery.selectPageSize();
    this.pageIndex$ = itemQuery.selectIndex();
    this.selectPageLength$ = itemQuery.selectPageLength();
    this.changeFilter();
  }
  setGridOptions() {
    this.gridOptions = defaultGridOptions({
      columnDefs: [
        {
          headerName: 'Tên',
          field: 'name',
          pinned: true,
        },
        {
          headerName: 'Mô tả',
          field: 'description',
        },
        {
          headerName: 'Danh mục',
          field: 'categories',
          cellEditorParams: this.categoryQuery.selectAll(),
          cellRenderer: 'categoryCell',
          width: 300,
        }
      ],
      frameworkComponents: {
        categoryCell: CategoryCellComponent,
      }
    }, DiseaseItemActionCellComponent);


  }

  setPaging() {
    this.itemQuery.selectPagination().subscribe(p => {
      this.pagingService.setPaginatorValue(this.paginator, p);
    });

    this.paginator.page.subscribe((p: PageEvent) => {
      this.itemService.getWithParam({
        ...this.pagingService.changePage(p),
        categories: this.selectCategoryCtrl.value
      });
    });
  }

  changeFilter() {
    this.selectCategoryCtrl.valueChanges.subscribe((categories) => {
      this.getItems(categories);
    });
  }
  ngAfterViewInit() {
    this.setPaging();
  }

  getItems(value = '') {
    this.itemService.getWithParam({
      page: 0,
      size: 20,
      categories: value
    });
  }

  getCategories() {
    this.categoryService.getWithParam({
      page: 0,
      size: 100000
    });
  }

  create() {
    const dialogRef = this.matDialog.open(EditDialogComponent, {
      data: {
        label: 'Tạo bệnh',
        componentType: EditDiseaseItemDialogFormComponent,
        content: {}
      } as EditDialogWithComponentData<Partial<DiseaseItemModel>>
    });
    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.itemService.create(res);
      }
    });
  }

}

import { Component, EventEmitter, ViewChild, AfterViewInit } from '@angular/core';
import { Observable, combineLatest } from 'rxjs';
import { ArticleItemService, ArticleCategoryService } from '@/store/services';
import { ArticleItemQuery, ArticleCategoryQuery } from '@/store/queries';
import { GridOptions } from 'ag-grid-community';
import { ArticleItemModel, ArticleCategoryModel } from '@/shared/models/article.model';
import { CategoryCellComponent, DateCellComponent } from '@/shared/components/cells';
import { EditDialogComponent } from '@/shared/components/dialog';
import { EditArticleItemDialogFormComponent } from '@/article/components/dialog-forms';
import { EditDialogWithComponentData } from '@/shared/models';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent, MatPaginator } from '@angular/material';
import { PagingService } from '@/core/services';
import { ArticleItemActionCellComponent } from '@/article/components/table-cells';
import { defaultGridOptions } from '@/shared/constant/ag-grid/default-grid-options';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-article-item-page',
  templateUrl: './article-item-page.component.html',
  styleUrls: ['./article-item-page.component.scss']
})
export class ArticleItemPageComponent implements AfterViewInit {


  gridOptions: GridOptions;
  models$: Observable<ArticleItemModel[]>;
  selectPageSize$: Observable<number>;
  selectPageLength$: Observable<number>;

  selectCategoryCtrl = new FormControl('');
  categories$ = new Observable<ArticleCategoryModel[]>();

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  pageIndex$: Observable<number>;
  loading$: Observable<boolean>;

  constructor(
    private itemService: ArticleItemService,
    private categoryService: ArticleCategoryService,
    private categoryQuery: ArticleCategoryQuery,
    private itemQuery: ArticleItemQuery,
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
    }, ArticleItemActionCellComponent);


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
        label: 'Tạo bài viết',
        componentType: EditArticleItemDialogFormComponent,
        content: {}
      } as EditDialogWithComponentData<Partial<ArticleItemModel>>
    });
    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.itemService.create(res);
      }
    });
  }

}

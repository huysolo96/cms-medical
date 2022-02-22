import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GridOptions } from 'ag-grid-community';
import { ArticleCategoryModel } from '@/shared/models/article.model';
import { EditDialogComponent } from '@/shared/components/dialog';
import { EditArticleCategoryDialogFormComponent } from '@/article/components/dialog-forms';
import { EditDialogWithComponentData } from '@/shared/models';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent, MatPaginator } from '@angular/material';
import { PagingService } from '@/core/services';
import { ArticleCategoryActionCellComponent } from '@/article/components/table-cells';
import { ArticleCategoryService } from '@/store/services';
import { ArticleCategoryQuery } from '@/store/queries';
import { DateCellComponent } from '@/shared/components/cells';

@Component({
  selector: 'app-article-category-page',
  templateUrl: './article-category-page.component.html',
  styleUrls: ['./article-category-page.component.scss']
})
export class ArticleCategoryPageComponent implements AfterViewInit {

  gridOptions: GridOptions;
  models$: Observable<ArticleCategoryModel[]>;

  loading$: Observable<boolean>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  
  constructor(
    private categoryQuery: ArticleCategoryQuery,
    private categoryService: ArticleCategoryService,
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
        actionCell: ArticleCategoryActionCellComponent,
        dateCell: DateCellComponent,
      },
    };
  }

  getCategories() {
    this.categoryService.getWithParam({
      page: 0,
      size: 20
    });
  }

  create() {
    const dialogRef = this.matDialog.open(EditDialogComponent, {
      data: {
        label: 'Tạo danh mục bài viết',
        componentType: EditArticleCategoryDialogFormComponent,
        content: {}
      } as EditDialogWithComponentData<Partial<ArticleCategoryModel>>
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

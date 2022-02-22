import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GridOptions } from 'ag-grid-community';
import { QuestionCategoryModel } from '@/shared/models/question.model';
import { DateCellComponent } from '@/shared/components/cells';
import { EditDialogComponent } from '@/shared/components/dialog';
import { EditQuestionCategoryDialogFormComponent } from '@/question/components/dialog-forms';
import { EditDialogWithComponentData } from '@/shared/models';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent, MatPaginator } from '@angular/material';
import { PagingService } from '@/core/services';
import { QuestionCategoryActionCellComponent } from '@/question/components/table-cells';
import { QuestionCategoryService } from '@/store/services';
import { QuestionCategoryQuery } from '@/store/queries';

@Component({
  selector: 'app-question-category-page',
  templateUrl: './question-category-page.component.html',
  styleUrls: ['./question-category-page.component.scss']
})
export class QuestionCategoryPageComponent implements AfterViewInit {

  gridOptions: GridOptions;
  models$: Observable<QuestionCategoryModel[]>;
  loading$: Observable<boolean>;
  
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    private categoryService: QuestionCategoryService,
    private categoryQuery: QuestionCategoryQuery,
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
        actionCell: QuestionCategoryActionCellComponent,
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

  create() {
    const dialogRef = this.matDialog.open(EditDialogComponent, {
      data: {
        label: 'Tạo danh mục câu hỏi',
        componentType: EditQuestionCategoryDialogFormComponent,
        content: {}
      } as EditDialogWithComponentData<Partial<QuestionCategoryModel>>
    });
    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.categoryService.create(res);
      }
    });
  }


}

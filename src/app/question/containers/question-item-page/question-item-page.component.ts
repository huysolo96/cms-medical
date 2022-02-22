import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import { QuestionItemService, QuestionCategoryService } from '@/store/services';
import { QuestionItemQuery, QuestionCategoryQuery } from '@/store/queries';
import { GridOptions } from 'ag-grid-community';
import { QuestionItemModel, QuestionCategoryModel } from '@/shared/models/question.model';
import { CategoryCellComponent } from '@/shared/components/cells';
import { EditDialogComponent } from '@/shared/components/dialog';
import { EditQuestionItemDialogFormComponent } from '@/question/components/dialog-forms';
import { EditDialogWithComponentData } from '@/shared/models';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent, MatPaginator } from '@angular/material';
import { PagingService } from '@/core/services';
import { QuestionItemActionCellComponent } from '@/question/components/table-cells';
import { defaultGridOptions } from '@/shared/constant/ag-grid/default-grid-options';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-question-item-page',
  templateUrl: './question-item-page.component.html',
  styleUrls: ['./question-item-page.component.scss']
})
export class QuestionItemPageComponent implements AfterViewInit {


  gridOptions: GridOptions;
  models$: Observable<QuestionItemModel[]>;
  selectPageSize$: Observable<number>;
  selectPageLength$: Observable<number>;

  selectCategoryCtrl = new FormControl('');
  categories$ = new Observable<QuestionCategoryModel[]>();

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  pageIndex$: Observable<number>;
  loading$: Observable<boolean>;

  constructor(
    private itemService: QuestionItemService,
    private categoryService: QuestionCategoryService,
    private categoryQuery: QuestionCategoryQuery,
    private itemQuery: QuestionItemQuery,
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
          headerName: 'Câu hỏi',
          field: 'question',
          pinned: true,
        },
        {
          headerName: 'Câu trả lời',
          field: 'answer',
        },
        {
          headerName: 'Trạng thái',
          field: 'status',
          valueFormatter: (params) => {
            return params.data.status  === 'actived' ? 'Actived' : 'Deactived ';
          }
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
    }, QuestionItemActionCellComponent);


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
        label: 'Tạo câu hỏi',
        componentType: EditQuestionItemDialogFormComponent,
        content: {}
      } as EditDialogWithComponentData<Partial<QuestionItemModel>>
    });
    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.itemService.create(res);
      }
    });
  }

}

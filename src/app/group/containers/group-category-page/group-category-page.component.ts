import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { GridOptions } from 'ag-grid-community';
import { GroupCategoryModel } from '@/shared/models/group.model';
import { DateCellComponent } from '@/shared/components/cells';
import { EditDialogComponent } from '@/shared/components/dialog';
import { EditGroupCategoryDialogFormComponent } from '@/group/components/dialog-forms';
import { EditDialogWithComponentData } from '@/shared/models';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent, MatPaginator } from '@angular/material';
import { PagingService } from '@/core/services';
import { GroupCategoryActionCellComponent } from '@/group/components/table-cells';
import { GroupCategoryService } from '@/store/services';
import { GroupCategoryQuery } from '@/store/queries';
import { defaultGridOptions } from '@/shared/constant/ag-grid/default-grid-options';

@Component({
  selector: 'app-group-category-page',
  templateUrl: './group-category-page.component.html',
  styleUrls: ['./group-category-page.component.scss']
})
export class GroupCategoryPageComponent implements AfterViewInit {

  gridOptions: GridOptions;
  models$: Observable<GroupCategoryModel[]>;
  loading$: Observable<boolean>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    private categoryService: GroupCategoryService,
    private categoryQuery: GroupCategoryQuery,
    private matDialog: MatDialog,
    private pagingService: PagingService
  ) {
    this.setGridOptions();
    this.getCategories();
    this.models$ = categoryQuery.selectAll();
    this.loading$ = categoryQuery.selectLoading();

  }
  setGridOptions() {
    this.gridOptions = defaultGridOptions({
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
      ],
      frameworkComponents: {
        actionCell: GroupCategoryActionCellComponent,
        dateCell: DateCellComponent
      },
    }, GroupCategoryActionCellComponent);
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
        label: 'Tạo danh mục nhóm',
        componentType: EditGroupCategoryDialogFormComponent,
        content: {}
      } as EditDialogWithComponentData<Partial<GroupCategoryModel>>
    });
    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.categoryService.create(res);
      }
    });
  }


}

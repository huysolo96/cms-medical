import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GroupItemService, GroupCategoryService, AccountService } from '@/store/services';
import { GroupItemQuery, GroupCategoryQuery } from '@/store/queries';
import { GridOptions } from 'ag-grid-community';
import { GroupItemModel, GroupCategoryModel } from '@/shared/models/group.model';
import { CategoryCellComponent, AvatarCellComponent } from '@/shared/components/cells';
import { EditDialogComponent } from '@/shared/components/dialog';
import { EditGroupItemDialogFormComponent } from '@/group/components/dialog-forms';
import { EditDialogWithComponentData } from '@/shared/models';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent, MatPaginator } from '@angular/material';
import { PagingService } from '@/core/services';
import { GroupItemActionCellComponent } from '@/group/components/table-cells';
import { defaultGridOptions } from '@/shared/constant/ag-grid/default-grid-options';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-group-item-page',
  templateUrl: './group-item-page.component.html',
  styleUrls: ['./group-item-page.component.scss']
})
export class GroupItemPageComponent implements AfterViewInit {


  gridOptions: GridOptions;
  models$: Observable<GroupItemModel[]>;
  selectPageSize$: Observable<number>;
  selectPageLength$: Observable<number>;

  selectCategoryCtrl = new FormControl('');
  categories$ = new Observable<GroupCategoryModel[]>();

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  pageIndex$: Observable<number>;
  loading$: Observable<boolean>;

  constructor(
    private itemService: GroupItemService,
    private categoryService: GroupCategoryService,
    private categoryQuery: GroupCategoryQuery,
    private itemQuery: GroupItemQuery,
    private accountService: AccountService,
    private matDialog: MatDialog,
    private pagingService: PagingService
  ) {
    this.setGridOptions();
    this.getItems();
    this.getCategories();
    this.getAccounts();
    this.models$ = itemQuery.selectAll();
    this.categories$ = this.categoryQuery.selectAll();
    this.selectPageSize$ = itemQuery.selectPageSize();
    this.pageIndex$ = itemQuery.selectIndex();
    this.loading$ = itemQuery.selectLoading();
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
          headerName: 'Ảnh đại diện',
          field: 'avatar',
          cellRenderer: 'avatarCell'
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
        avatarCell: AvatarCellComponent,
      }
    }, GroupItemActionCellComponent);


  }


  getAccounts() {
    this.accountService.getAll();
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
        label: 'Tạo nhóm',
        componentType: EditGroupItemDialogFormComponent,
        content: {}
      } as EditDialogWithComponentData<Partial<GroupItemModel>>
    });
    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.itemService.create(res);
      }
    });
  }

}

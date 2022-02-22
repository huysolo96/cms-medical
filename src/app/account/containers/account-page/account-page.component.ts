import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { AccountQuery } from '@/store/queries';
import { Observable } from 'rxjs';
import { AccountModel, EditDialogWithComponentData } from '@/shared/models';
import { GridOptions } from 'ag-grid-community';
import { AccountService, RoleService } from '@/store/services';
import { AccountActionCellComponent } from '@/account/components';
import { MatDialog, PageEvent, MatPaginator } from '@angular/material';
import { EditDialogComponent } from '@/shared/components/dialog';
import { EditAccountDialogFormComponent } from '@/account/components/dialog-forms';
import { PagingService } from '@/core/services';
import { DateCellComponent, AvatarCellComponent } from '@/shared/components/cells';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.scss']
})
export class AccountPageComponent implements OnInit, AfterViewInit {
  gridOptions: GridOptions;
  models$: Observable<AccountModel[]>;
  loading$: Observable<boolean>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    private accountService: AccountService,
    roleService: RoleService,
    private accountQuery: AccountQuery,
    private matDialog: MatDialog,
    private pagingService: PagingService
  ) {
    this.getAccounts();
    roleService.getAll();
    this.setGridOptions();
    this.models$ = accountQuery.selectAll();
    this.loading$ = accountQuery.selectLoading();
  }

  ngOnInit() {
  }

  setGridOptions() {
    this.gridOptions = {
      columnDefs: [
        {
          headerName: 'Tên đăng nhập',
          field: 'username',
          pinned: true
        },
        {
          headerName: 'Ảnh đại diện',
          field: 'avatar',
          cellRenderer: 'avatarCell'
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
        actionCell: AccountActionCellComponent,
        avatarCell: AvatarCellComponent,
        dateCell: DateCellComponent
      },
    };
  }

  ngAfterViewInit() {
    this.setPaging();
  }

  setPaging() {
    this.accountQuery.selectPagination().subscribe(p => {
      this.pagingService.setPaginatorValue(this.paginator, p);
    });

    this.paginator.page.subscribe((p: PageEvent) => {
      this.accountService.getWithParam(this.pagingService.changePage(p));
    });
  }


  getAccounts() {
    this.accountService.getWithParam({
      page: 0,
      size: 20,
    });
  }

  create() {
    const dialogRef = this.matDialog.open(EditDialogComponent, {
      data: {
        label: 'Tạo danh mục tài khoản',
        componentType: EditAccountDialogFormComponent,
        content: {}
      } as EditDialogWithComponentData<Partial<AccountModel>>
    });
    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.accountService.create(res);
      }
    });
  }
}

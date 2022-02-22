import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { UserQuery, DiseaseItemQuery } from '@/store/queries';
import { Observable } from 'rxjs';
import { UserModel, DiseaseItemModel } from '@/shared/models';
import { GridOptions } from 'ag-grid-community';
import { UserService, RoleService, DiseaseItemService } from '@/store/services';
import { UserActionCellComponent } from '@/user/components';
import { PageEvent, MatPaginator } from '@angular/material';
import { PagingService } from '@/core/services';
import { DateCellComponent, AvatarCellComponent } from '@/shared/components/cells';
import { FormControl, FormGroup } from '@angular/forms';
import { startWith, combineLatest, debounceTime } from 'rxjs/operators';
import { DiseaseItemApiService } from '@/core/apis';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit, AfterViewInit {
  gridOptions: GridOptions;
  models$: Observable<UserModel[]>;
  loading$: Observable<boolean>;

  userSearchGroup: FormGroup;
  userSearchCtrl = new FormControl('');

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  diseases$: Observable<DiseaseItemModel[]>;
  constructor(
    private userService: UserService,
    roleService: RoleService,
    private userQuery: UserQuery,
    private pagingService: PagingService,
    private diseaseQuery: DiseaseItemQuery,
    private diseaseService: DiseaseItemService
  ) {
    roleService.getAll();
    this.setGridOptions();
    this.diseaseService.getAll();
    this.models$ = userQuery.selectAll();
    this.loading$ = userQuery.selectLoading();
    this.diseases$ = this.diseaseQuery.selectAll();
    this.setFilter();
  }

  setFilter() {
    this.userSearchGroup = new FormGroup({
      groupId: new FormControl(''),
      keyword: new FormControl(''),
      diseaseCategories: new FormControl([]),
      type: new FormControl(null)
    });

    this.userSearchGroup.valueChanges.pipe(
      startWith({
      }),
      debounceTime(500)
    ).subscribe(() => {
      this.getUsers();
    });
  }

  ngOnInit() {
    // this.userSearchCtrl.valueChanges.pipe(
    //   debounceTime(500),
    //   distinctUntilChanged()
    // ).subscribe(v => {
    //   this.getUsers(v);
    // });
  }

  setGridOptions() {
    this.gridOptions = {
      columnDefs: [
        {
          headerName: 'Tên người dùng',
          field: 'name',
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
          headerName: 'Quyền',
          field: 'roles',
          valueFormatter: (params) => {
            return params.data.type === 'USER' ? 'Người dùng' : 'Chuyên gia';
          }
        },
        {
          headerName: 'Hành động',
          field: 'action',
          cellRenderer: 'actionCell',
          pinned: 'right',
        }
      ],
      frameworkComponents: {
        actionCell: UserActionCellComponent,
        dateCell: DateCellComponent,
        avatarCell: AvatarCellComponent
      },
    };
  }


  getUsers() {
    this.userService.getFilterUserParam({
      page: 0,
      size: 20,
    }, this.userSearchGroup.value).subscribe(() => {});
  }

  ngAfterViewInit() {
    this.setPaging();
  }

  setPaging() {
    this.userQuery.selectPagination().subscribe(p => {
      this.pagingService.setPaginatorValue(this.paginator, p);
    });

    this.paginator.page.subscribe((p: PageEvent) => {
      this.userService.getFilterUserParam(this.pagingService.changePage(p), this.userSearchGroup.value);
    });
  }
}

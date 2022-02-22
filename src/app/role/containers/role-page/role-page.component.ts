import { Component, OnInit } from '@angular/core';
import { RoleService } from '@/store/services';
import { RoleQuery } from '@/store/queries';
import { Observable } from 'rxjs';
import { RoleModel, EditDialogWithComponentData } from '@/shared/models';
import { MatDialog } from '@angular/material';
import { GridOptions } from 'ag-grid-community';
import { RoleActionCellComponent } from '@/role/components';
import { EditDialogComponent } from '@/shared/components/dialog';
import { EditRoleDialogFormComponent } from '@/role/components/dialog-forms';
import { DateCellComponent } from '@/shared/components/cells';

@Component({
  selector: 'app-role-page',
  templateUrl: './role-page.component.html',
  styleUrls: ['./role-page.component.scss']
})
export class RolePageComponent implements OnInit {
  gridOptions: GridOptions;
  models$: Observable<RoleModel[]>;
  loading$: Observable<boolean>;
  selectPageSize$: Observable<number>;
  selectPageLength$: Observable<number>;
  model: RoleModel[];

  constructor(
    private roleService: RoleService,
    roleQuery: RoleQuery,
    private matDialog: MatDialog,
  ) {
    this.getRoles();
    roleService.getAll();
    this.setGridOptions();
    this.models$ = roleQuery.selectAll();
    this.loading$ = roleQuery.selectLoading();
  }

  ngOnInit() {
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
        actionCell: RoleActionCellComponent,
        dateCell: DateCellComponent
      },
    };
  }


  getRoles() {
    this.roleService.getAll();
  }

  create() {
    const dialogRef = this.matDialog.open(EditDialogComponent, {
      data: {
        label: 'Tạo quyền',
        componentType: EditRoleDialogFormComponent,
        content: {}
      } as EditDialogWithComponentData<Partial<RoleModel>>
    });
    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.roleService.create(res);
      }
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { PermissionService } from '@/store/services';
import { PermissionQuery } from '@/store/queries';
import { Observable } from 'rxjs';
import { PermissionModel, EditDialogWithComponentData } from '@/shared/models';
import { MatDialog } from '@angular/material';
import { GridOptions } from 'ag-grid-community';
import { PermissionActionCellComponent } from '@/role/components';
import { EditDialogComponent } from '@/shared/components/dialog';
import { EditPermissionDialogFormComponent } from '@/role/components/dialog-forms';
import { DateCellComponent } from '@/shared/components/cells';

@Component({
  selector: 'app-permission-page',
  templateUrl: './permission-page.component.html',
  styleUrls: ['./permission-page.component.scss']
})
export class PermissionPageComponent implements OnInit {
  gridOptions: GridOptions;
  models$: Observable<PermissionModel[]>;
  loading$: Observable<boolean>;
  selectPageSize$: Observable<number>;
  selectPageLength$: Observable<number>;
  model: PermissionModel[];

  constructor(
    private permissionService: PermissionService,
    permissionQuery: PermissionQuery,
    private matDialog: MatDialog,
  ) {
    this.getPermissions();
    permissionService.getAll();
    this.setGridOptions();
    this.models$ = permissionQuery.selectAll();
    this.loading$ = permissionQuery.selectLoading();
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
        actionCell: PermissionActionCellComponent,
        dateCell: DateCellComponent
      },
    };
  }


  getPermissions() {
    this.permissionService.getAll();
  }

  create() {
    const dialogRef = this.matDialog.open(EditDialogComponent, {
      data: {
        label: 'Tạo quyền',
        componentType: EditPermissionDialogFormComponent,
        content: {}
      } as EditDialogWithComponentData<Partial<PermissionModel>>
    });
    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.permissionService.create(res);
      }
    });
  }

}

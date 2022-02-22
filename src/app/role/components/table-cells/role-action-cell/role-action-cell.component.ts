import { Component} from '@angular/core';
import { AgFrameworkComponent } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { RoleService } from '@/store/services';
import { RoleModel, EditDialogWithComponentData } from '@/shared/models';
import { MatDialog } from '@angular/material/dialog';
import { EditDialogComponent } from '@/shared/components/dialog';
import { EditRoleDialogFormComponent } from '../../dialog-forms';

@Component({
  selector: 'app-role-action-cell',
  templateUrl: './role-action-cell.component.html',
  styleUrls: ['./role-action-cell.component.scss']
})
export class RoleActionCellComponent implements AgFrameworkComponent<any> {
  data: RoleModel;

  constructor(
    private roleService: RoleService,
    private matDialog: MatDialog
    ) {
  }
  agInit(params: ICellRendererParams): void {
    this.data = params.data as RoleModel;
  }

  delete() {
    this.roleService.delete(this.data.id);
  }

  edit() {
    const dialogRef = this.matDialog.open(EditDialogComponent, {
      data: {
        label: 'Chỉnh sửa quyền',
        componentType: EditRoleDialogFormComponent,
        content: this.data
      } as EditDialogWithComponentData<RoleModel>
    });
    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.roleService.update(res);
      }
    });
  }



}

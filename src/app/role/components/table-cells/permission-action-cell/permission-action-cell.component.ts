import { Component} from '@angular/core';
import { AgFrameworkComponent } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { PermissionService } from '@/store/services';
import { PermissionModel, EditDialogWithComponentData } from '@/shared/models';
import { MatDialog } from '@angular/material/dialog';
import { EditDialogComponent } from '@/shared/components/dialog';
import { EditPermissionDialogFormComponent } from '../../dialog-forms';

@Component({
  selector: 'app-permission-action-cell',
  templateUrl: './permission-action-cell.component.html',
  styleUrls: ['./permission-action-cell.component.scss']
})
export class PermissionActionCellComponent implements AgFrameworkComponent<any> {
  data: PermissionModel;

  constructor(
    private permissionService: PermissionService,
    private matDialog: MatDialog
    ) {
  }
  agInit(params: ICellRendererParams): void {
    this.data = params.data as PermissionModel;
  }

  delete() {
    this.permissionService.delete(this.data.id);
  }

  edit() {
    const dialogRef = this.matDialog.open(EditDialogComponent, {
      data: {
        label: 'Chỉnh sửa quyền',
        componentType: EditPermissionDialogFormComponent,
        content: this.data
      } as EditDialogWithComponentData<PermissionModel>
    });
    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.permissionService.update(res);
      }
    });
  }



}

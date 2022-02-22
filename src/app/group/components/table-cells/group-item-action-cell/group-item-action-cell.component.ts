import { Component } from '@angular/core';
import { AgFrameworkComponent } from 'ag-grid-angular';
import { ICellRendererParams, IAfterGuiAttachedParams } from 'ag-grid-community';
import { GroupItemService } from '@/store/services';
import { GroupItemModel, EditDialogWithComponentData } from '@/shared/models';
import { MatDialog } from '@angular/material/dialog';
import { EditDialogComponent } from '@/shared/components/dialog';
import { EditGroupItemDialogFormComponent } from '../../dialog-forms';
import { GroupUserDialogComponent } from '../../dialogs/group-user-dialog/group-user-dialog.component';

@Component({
  selector: 'app-group-item-action-cell',
  templateUrl: './group-item-action-cell.component.html',
  styleUrls: ['./group-item-action-cell.component.scss']
})
export class GroupItemActionCellComponent implements AgFrameworkComponent<any> {
  data: GroupItemModel;

  constructor(
    private item: GroupItemService,
    private matDialog: MatDialog
    ) {
  }
  agInit(params: ICellRendererParams): void {
    this.data = params.data as GroupItemModel;
  }

  delete() {
    this.item.delete(this.data.id);
  }

  edit() {
    const dialogRef = this.matDialog.open(EditDialogComponent, {
      data: {
        label: 'Chỉnh sửa nhóm',
        componentType: EditGroupItemDialogFormComponent,
        content: this.data
      } as EditDialogWithComponentData<GroupItemModel>
    });
    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.item.update(res);
      }
    });
  }

  changeGroup() {
    const dialogRef = this.matDialog.open(GroupUserDialogComponent, {
      data: {
        groupId: this.data.id
      },
      width: '700px',
    });
  }


}

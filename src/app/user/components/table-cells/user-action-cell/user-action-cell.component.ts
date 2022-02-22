import { Component} from '@angular/core';
import { AgFrameworkComponent } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { UserService } from '@/store/services';
import { UserModel, EditDialogWithComponentData } from '@/shared/models';
import { MatDialog } from '@angular/material/dialog';
import { EditDialogComponent } from '@/shared/components/dialog';
import { EditUserDialogFormComponent } from '../../dialog-forms';

@Component({
  selector: 'app-user-action-cell',
  templateUrl: './user-action-cell.component.html',
  styleUrls: ['./user-action-cell.component.scss']
})
export class UserActionCellComponent implements AgFrameworkComponent<any> {
  data: UserModel;

  constructor(
    private categoryService: UserService,
    private matDialog: MatDialog
    ) {
  }
  agInit(params: ICellRendererParams): void {
    this.data = params.data as UserModel;
  }
  edit() {
    const dialogRef = this.matDialog.open(EditDialogComponent, {
      data: {
        label: 'Chỉnh sửa thông tin người dùng',
        componentType: EditUserDialogFormComponent,
        content: this.data
      } as EditDialogWithComponentData<UserModel>
    });
    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.categoryService.update(res);
      }
    });
  }



}

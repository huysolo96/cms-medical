import { Component} from '@angular/core';
import { AgFrameworkComponent } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { AccountService } from '@/store/services';
import { AccountModel, EditDialogWithComponentData } from '@/shared/models';
import { MatDialog } from '@angular/material/dialog';
import { EditDialogComponent } from '@/shared/components/dialog';
import { EditAccountDialogFormComponent } from '../../dialog-forms';

@Component({
  selector: 'app-account-action-cell',
  templateUrl: './account-action-cell.component.html',
  styleUrls: ['./account-action-cell.component.scss']
})
export class AccountActionCellComponent implements AgFrameworkComponent<any> {
  data: AccountModel;

  constructor(
    private categoryService: AccountService,
    private matDialog: MatDialog
    ) {
  }
  agInit(params: ICellRendererParams): void {
    this.data = params.data as AccountModel;
  }

  delete() {
    this.categoryService.delete(this.data.id);
  }

  edit() {
    const dialogRef = this.matDialog.open(EditDialogComponent, {
      data: {
        label: 'Chỉnh sửa tài khoản',
        componentType: EditAccountDialogFormComponent,
        content: this.data
      } as EditDialogWithComponentData<AccountModel>
    });
    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.categoryService.update(res);
      }
    });
  }



}

import { Component} from '@angular/core';
import { AgFrameworkComponent } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { MedicalService } from '@/store/services';
import { MedicalItemModel, EditDialogWithComponentData } from '@/shared/models';
import { MatDialog } from '@angular/material/dialog';
import { EditDialogComponent } from '@/shared/components/dialog';
import { EditMedicalDialogFormComponent } from '../../dialog-forms';

@Component({
  selector: 'app-medical-action-cell',
  templateUrl: './medical-action-cell.component.html',
  styleUrls: ['./medical-action-cell.component.scss']
})
export class MedicalActionCellComponent implements AgFrameworkComponent<any> {
  data: MedicalItemModel;

  constructor(
    private medicalService: MedicalService,
    private matDialog: MatDialog
    ) {
  }
  agInit(params: ICellRendererParams): void {
    this.data = params.data as MedicalItemModel;
  }
  edit() {
    const dialogRef = this.matDialog.open(EditDialogComponent, {
      data: {
        label: 'Chỉnh sửa thông tin người dùng',
        componentType: EditMedicalDialogFormComponent,
        content: this.data
      } as EditDialogWithComponentData<MedicalItemModel>
    });
    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.medicalService.update(res);
      }
    });
  }

  delete() {
    this.medicalService.delete(this.data.id);
  }



}

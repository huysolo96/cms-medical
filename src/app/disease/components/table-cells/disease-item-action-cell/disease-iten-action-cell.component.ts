import { Component } from '@angular/core';
import { AgFrameworkComponent } from 'ag-grid-angular';
import { ICellRendererParams, IAfterGuiAttachedParams } from 'ag-grid-community';
import { DiseaseItemService } from '@/store/services';
import { DiseaseItemModel, EditDialogWithComponentData } from '@/shared/models';
import { MatDialog } from '@angular/material/dialog';
import { EditDialogComponent } from '@/shared/components/dialog';
import { EditDiseaseItemDialogFormComponent } from '../../dialog-forms';

@Component({
  selector: 'app-disease-item-action-cell',
  templateUrl: './disease-item-action-cell.component.html',
  styleUrls: ['./disease-item-action-cell.component.scss']
})
export class DiseaseItemActionCellComponent implements AgFrameworkComponent<any> {
  data: DiseaseItemModel;

  constructor(
    private item: DiseaseItemService,
    private matDialog: MatDialog
    ) {
  }
  agInit(params: ICellRendererParams): void {
    this.data = params.data as DiseaseItemModel;
  }

  delete() {
    this.item.delete(this.data.id);
  }

  edit() {
    const dialogRef = this.matDialog.open(EditDialogComponent, {
      data: {
        label: 'Chỉnh sửa bệnh',
        componentType: EditDiseaseItemDialogFormComponent,
        content: this.data
      } as EditDialogWithComponentData<DiseaseItemModel>
    });
    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.item.update(res);
      }
    });
  }



}

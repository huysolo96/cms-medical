import { Component } from '@angular/core';
import { AgFrameworkComponent } from 'ag-grid-angular';
import { ICellRendererParams, IAfterGuiAttachedParams } from 'ag-grid-community';
import { QuestionItemService } from '@/store/services';
import { QuestionItemModel, EditDialogWithComponentData } from '@/shared/models';
import { MatDialog } from '@angular/material/dialog';
import { EditDialogComponent } from '@/shared/components/dialog';
import { EditQuestionItemDialogFormComponent } from '../../dialog-forms';

@Component({
  selector: 'app-question-item-action-cell',
  templateUrl: './question-item-action-cell.component.html',
  styleUrls: ['./question-item-action-cell.component.scss']
})
export class QuestionItemActionCellComponent implements AgFrameworkComponent<any> {
  data: QuestionItemModel;

  constructor(
    private item: QuestionItemService,
    private matDialog: MatDialog
    ) {
  }
  agInit(params: ICellRendererParams): void {
    this.data = params.data as QuestionItemModel;
  }

  delete() {
    this.item.delete(this.data.id);
  }

  edit() {
    const dialogRef = this.matDialog.open(EditDialogComponent, {
      data: {
        label: 'Chỉnh sửa câu hỏi',
        componentType: EditQuestionItemDialogFormComponent,
        content: this.data
      } as EditDialogWithComponentData<QuestionItemModel>
    });
    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.item.update(res);
      }
    });
  }



}

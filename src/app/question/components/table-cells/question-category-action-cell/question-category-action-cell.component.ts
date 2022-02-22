import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp, AgFrameworkComponent } from 'ag-grid-angular';
import { ICellRendererParams, IAfterGuiAttachedParams } from 'ag-grid-community';
import { QuestionCategoryService } from '@/store/services';
import { QuestionCategoryModel, EditDialogWithComponentData } from '@/shared/models';
import { MatDialog } from '@angular/material/dialog';
import { EditDialogComponent } from '@/shared/components/dialog';
import { EditQuestionCategoryDialogFormComponent } from '../../dialog-forms';

@Component({
  selector: 'app-question-category-action-cell',
  templateUrl: './question-category-action-cell.component.html',
  styleUrls: ['./question-category-action-cell.component.scss']
})
export class QuestionCategoryActionCellComponent implements AgFrameworkComponent<any> {
  data: QuestionCategoryModel;

  constructor(
    private categoryService: QuestionCategoryService,
    private matDialog: MatDialog
    ) {
  }
  refresh(params: any): boolean {
    return false;
  }
  agInit(params: ICellRendererParams): void {
    this.data = params.data as QuestionCategoryModel;
  }
  afterGuiAttached?(params?: IAfterGuiAttachedParams): void {
  }

  delete() {
    this.categoryService.delete(this.data.id);
  }

  edit() {
    const dialogRef = this.matDialog.open(EditDialogComponent, {
      data: {
        label: 'Chỉnh sửa câu hỏi',
        componentType: EditQuestionCategoryDialogFormComponent,
        content: this.data
      } as EditDialogWithComponentData<QuestionCategoryModel>
    });
    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.categoryService.update(res);
      }
    });
  }



}

import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp, AgFrameworkComponent } from 'ag-grid-angular';
import { ICellRendererParams, IAfterGuiAttachedParams } from 'ag-grid-community';
import { DiseaseCategoryService } from '@/store/services';
import { DiseaseCategoryModel, EditDialogWithComponentData } from '@/shared/models';
import { MatDialog } from '@angular/material/dialog';
import { EditDialogComponent } from '@/shared/components/dialog';
import { EditDiseaseCategoryDialogFormComponent } from '../../dialog-forms';

@Component({
  selector: 'app-disease-category-action-cell',
  templateUrl: './disease-category-action-cell.component.html',
  styleUrls: ['./disease-category-action-cell.component.scss']
})
export class DiseaseCategoryActionCellComponent implements AgFrameworkComponent<any> {
  data: DiseaseCategoryModel;

  constructor(
    private categoryService: DiseaseCategoryService,
    private matDialog: MatDialog
    ) {
  }
  refresh(params: any): boolean {
    return false;
  }
  agInit(params: ICellRendererParams): void {
    this.data = params.data as DiseaseCategoryModel;
  }
  afterGuiAttached?(params?: IAfterGuiAttachedParams): void {
  }

  delete() {
    this.categoryService.delete(this.data.id);
  }

  edit() {
    const dialogRef = this.matDialog.open(EditDialogComponent, {
      data: {
        label: 'Chỉnh sửa bệnh',
        componentType: EditDiseaseCategoryDialogFormComponent,
        content: this.data
      } as EditDialogWithComponentData<DiseaseCategoryModel>
    });
    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.categoryService.update(res);
      }
    });
  }



}

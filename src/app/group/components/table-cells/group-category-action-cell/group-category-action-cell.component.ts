import { Component } from '@angular/core';
import { AgFrameworkComponent } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { GroupCategoryService } from '@/store/services';
import { GroupCategoryModel, EditDialogWithComponentData } from '@/shared/models';
import { MatDialog } from '@angular/material/dialog';
import { EditDialogComponent } from '@/shared/components/dialog';
import { EditGroupCategoryDialogFormComponent } from '../../dialog-forms';

@Component({
  selector: 'app-group-category-action-cell',
  templateUrl: './group-category-action-cell.component.html',
  styleUrls: ['./group-category-action-cell.component.scss']
})
export class GroupCategoryActionCellComponent implements AgFrameworkComponent<any> {
  data: GroupCategoryModel;

  constructor(
    private categoryService: GroupCategoryService,
    private matDialog: MatDialog
    ) {
  }
  refresh(): boolean {
    return false;
  }
  agInit(params: ICellRendererParams): void {
    this.data = params.data as GroupCategoryModel;
  }

  delete() {
    this.categoryService.delete(this.data.id);
  }

  edit() {
    const dialogRef = this.matDialog.open(EditDialogComponent, {
      data: {
        label: 'Chỉnh sửa nhóm',
        componentType: EditGroupCategoryDialogFormComponent,
        content: this.data
      } as EditDialogWithComponentData<GroupCategoryModel>
    });
    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.categoryService.update(res);
      }
    });
  }



}

import { Component} from '@angular/core';
import { AgFrameworkComponent } from 'ag-grid-angular';
import { ICellRendererParams, IAfterGuiAttachedParams } from 'ag-grid-community';
import { ArticleCategoryService } from '@/store/services';
import { ArticleCategoryModel, EditDialogWithComponentData } from '@/shared/models';
import { MatDialog } from '@angular/material/dialog';
import { EditDialogComponent } from '@/shared/components/dialog';
import { EditArticleCategoryDialogFormComponent } from '../../dialog-forms';

@Component({
  selector: 'app-article-category-action-cell',
  templateUrl: './article-category-action-cell.component.html',
  styleUrls: ['./article-category-action-cell.component.scss']
})
export class ArticleCategoryActionCellComponent implements AgFrameworkComponent<any> {
  data: ArticleCategoryModel;

  constructor(
    private categoryService: ArticleCategoryService,
    private matDialog: MatDialog
    ) {
  }
  agInit(params: ICellRendererParams): void {
    this.data = params.data as ArticleCategoryModel;
  }

  delete() {
    this.categoryService.delete(this.data.id);
  }

  edit() {
    const dialogRef = this.matDialog.open(EditDialogComponent, {
      data: {
        label: 'Chỉnh sửa bài viết',
        componentType: EditArticleCategoryDialogFormComponent,
        content: this.data
      } as EditDialogWithComponentData<ArticleCategoryModel>
    });
    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.categoryService.update(res);
      }
    });
  }



}

import { Component } from '@angular/core';
import { AgFrameworkComponent } from 'ag-grid-angular';
import { ICellRendererParams, IAfterGuiAttachedParams } from 'ag-grid-community';
import { ArticleItemService } from '@/store/services';
import { ArticleItemModel, EditDialogWithComponentData } from '@/shared/models';
import { MatDialog } from '@angular/material/dialog';
import { EditDialogComponent } from '@/shared/components/dialog';
import { EditArticleItemDialogFormComponent } from '../../dialog-forms';

@Component({
  selector: 'app-article-item-action-cell',
  templateUrl: './article-item-action-cell.component.html',
  styleUrls: ['./article-item-action-cell.component.scss']
})
export class ArticleItemActionCellComponent implements AgFrameworkComponent<any> {
  data: ArticleItemModel;

  constructor(
    private item: ArticleItemService,
    private matDialog: MatDialog
    ) {
  }
  agInit(params: ICellRendererParams): void {
    this.data = params.data as ArticleItemModel;
  }

  delete() {
    this.item.delete(this.data.id);
  }

  edit() {
    const dialogRef = this.matDialog.open(EditDialogComponent, {
      data: {
        label: 'Chỉnh sửa bài viết',
        componentType: EditArticleItemDialogFormComponent,
        content: this.data
      } as EditDialogWithComponentData<ArticleItemModel>
    });
    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.item.update(res);
      }
    });
  }



}

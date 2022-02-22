import { Component, ViewEncapsulation } from '@angular/core';
import { ArticleItemModel, AEditComponentWithValidate, ArticleCategoryModel } from '@/shared/models';
import { FormGroup, FormControl } from '@angular/forms';
import { FormValidator } from '@/core/services';
import { ArticleCategoryQuery } from '@/store/queries';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-edit-article-item-dialog-form',
  templateUrl: './edit-article-item-dialog-form.component.html',
  styleUrls: ['./edit-article-item-dialog-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EditArticleItemDialogFormComponent extends AEditComponentWithValidate<ArticleItemModel> {
  categories$: Observable<ArticleCategoryModel[]>;

  constructor(protected formValidator: FormValidator, query: ArticleCategoryQuery) {
    super(formValidator);
    this.categories$ = query.selectAll();
  }

  protected createForm(data: ArticleItemModel): FormGroup {
    return new FormGroup({
      name: new FormControl(data.name, this.formValidator.validNoEmpty),
      description: new FormControl(data.description),
      content: new FormControl(data.content),
      categories: new FormControl(data.categories, this.formValidator.validArray),
      thumbnail: new FormControl(data.thumbnail),
    });
  }



}

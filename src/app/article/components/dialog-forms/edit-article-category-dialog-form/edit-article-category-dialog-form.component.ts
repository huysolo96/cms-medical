import { Component, ViewEncapsulation } from '@angular/core';
import { AEditComponentWithValidate, ArticleCategoryModel } from '@/shared/models';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-edit-article-category-dialog-form',
  templateUrl: './edit-article-category-dialog-form.component.html',
  styleUrls: ['./edit-article-category-dialog-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EditArticleCategoryDialogFormComponent extends AEditComponentWithValidate<ArticleCategoryModel> {
  categories$: Observable<ArticleCategoryModel[]>;

  protected createForm(data: ArticleCategoryModel): FormGroup {
    return new FormGroup({
      name: new FormControl(data.name, this.formValidator.validNoEmpty),
      description: new FormControl(data.description),
    });
  }



}

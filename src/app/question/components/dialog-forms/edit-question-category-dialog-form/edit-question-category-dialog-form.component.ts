import { Component, ViewEncapsulation } from '@angular/core';
import { AEditComponentWithValidate, QuestionCategoryModel } from '@/shared/models';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-edit-question-category-dialog-form',
  templateUrl: './edit-question-category-dialog-form.component.html',
  styleUrls: ['./edit-question-category-dialog-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EditQuestionCategoryDialogFormComponent extends AEditComponentWithValidate<QuestionCategoryModel> {
  categories$: Observable<QuestionCategoryModel[]>;

  protected createForm(data: QuestionCategoryModel): FormGroup {
    return new FormGroup({
      name: new FormControl(data.name, this.formValidator.validNoEmpty),
      description: new FormControl(data.description),
    });
  }



}

import { Component, ViewEncapsulation } from '@angular/core';
import { QuestionItemModel, AEditComponentWithValidate, QuestionCategoryModel } from '@/shared/models';
import { FormGroup, FormControl } from '@angular/forms';
import { FormValidator } from '@/core/services';
import { QuestionCategoryQuery } from '@/store/queries';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-edit-question-item-dialog-form',
  templateUrl: './edit-question-item-dialog-form.component.html',
  styleUrls: ['./edit-question-item-dialog-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EditQuestionItemDialogFormComponent extends AEditComponentWithValidate<QuestionItemModel> {
  categories$: Observable<QuestionCategoryModel[]>;

  constructor(protected formValidator: FormValidator, query: QuestionCategoryQuery) {
    super(formValidator);
    this.categories$ = query.selectAll();
  }

  protected createForm(data: QuestionItemModel): FormGroup {
    return new FormGroup({
      question: new FormControl(data.question, this.formValidator.validNoEmpty),
      answer: new FormControl(data.answer),
      status: new FormControl(data.status),
      categories: new FormControl(data.categories, this.formValidator.validArray)
    });
  }

}

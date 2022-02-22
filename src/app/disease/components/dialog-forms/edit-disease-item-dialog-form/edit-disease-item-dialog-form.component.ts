import { Component, ViewEncapsulation } from '@angular/core';
import { DiseaseItemModel, AEditComponentWithValidate, DiseaseCategoryModel } from '@/shared/models';
import { FormGroup, FormControl } from '@angular/forms';
import { FormValidator } from '@/core/services';
import { DiseaseCategoryQuery } from '@/store/queries';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-edit-disease-item-dialog-form',
  templateUrl: './edit-disease-item-dialog-form.component.html',
  styleUrls: ['./edit-disease-item-dialog-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EditDiseaseItemDialogFormComponent extends AEditComponentWithValidate<DiseaseItemModel> {
  categories$: Observable<DiseaseCategoryModel[]>;

  constructor(protected formValidator: FormValidator, query: DiseaseCategoryQuery) {
    super(formValidator);
    this.categories$ = query.selectAll();
  }

  protected createForm(data: DiseaseItemModel): FormGroup {
    return new FormGroup({
      name: new FormControl(data.name, this.formValidator.validNoEmpty),
      description: new FormControl(data.description),
      categories: new FormControl(data.categories, this.formValidator.validArray)
    });
  }



}

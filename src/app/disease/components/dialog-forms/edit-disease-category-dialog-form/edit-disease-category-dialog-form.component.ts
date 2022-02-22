import { Component, ViewEncapsulation } from '@angular/core';
import { AEditComponentWithValidate, DiseaseCategoryModel } from '@/shared/models';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-edit-disease-category-dialog-form',
  templateUrl: './edit-disease-category-dialog-form.component.html',
  styleUrls: ['./edit-disease-category-dialog-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EditDiseaseCategoryDialogFormComponent extends AEditComponentWithValidate<DiseaseCategoryModel> {
  categories$: Observable<DiseaseCategoryModel[]>;

  protected createForm(data: DiseaseCategoryModel): FormGroup {
    return new FormGroup({
      name: new FormControl(data.name, this.formValidator.validNoEmpty),
      description: new FormControl(data.description),
    });
  }



}

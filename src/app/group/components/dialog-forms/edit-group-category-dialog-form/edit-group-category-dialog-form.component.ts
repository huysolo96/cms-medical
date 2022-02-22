import { Component, ViewEncapsulation } from '@angular/core';
import { AEditComponentWithValidate, GroupCategoryModel } from '@/shared/models';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-edit-group-category-dialog-form',
  templateUrl: './edit-group-category-dialog-form.component.html',
  styleUrls: ['./edit-group-category-dialog-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EditGroupCategoryDialogFormComponent extends AEditComponentWithValidate<GroupCategoryModel> {
  categories$: Observable<GroupCategoryModel[]>;

  protected createForm(data: GroupCategoryModel): FormGroup {
    return new FormGroup({
      name: new FormControl(data.name, this.formValidator.validNoEmpty),
      description: new FormControl(data.description),
    });
  }



}

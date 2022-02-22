import { Component, ViewEncapsulation } from '@angular/core';
import { GroupItemModel, AEditComponentWithValidate, GroupCategoryModel } from '@/shared/models';
import { FormGroup, FormControl } from '@angular/forms';
import { FormValidator } from '@/core/services';
import { GroupCategoryQuery } from '@/store/queries';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-edit-group-item-dialog-form',
  templateUrl: './edit-group-item-dialog-form.component.html',
  styleUrls: ['./edit-group-item-dialog-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EditGroupItemDialogFormComponent extends AEditComponentWithValidate<GroupItemModel> {
  categories$: Observable<GroupCategoryModel[]>;

  constructor(protected formValidator: FormValidator, query: GroupCategoryQuery) {
    super(formValidator);
    this.categories$ = query.selectAll();
  }

  protected createForm(data: GroupItemModel): FormGroup {
    return new FormGroup({
      name: new FormControl(data.name, this.formValidator.validNoEmpty),
      avatar: new FormControl(data.avatar),
      description: new FormControl(data.description),
      categories: new FormControl(data.categories, this.formValidator.validArray)
    });
  }



}

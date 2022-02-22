import { Component, ViewEncapsulation } from '@angular/core';
import { RoleModel, AEditComponent } from '@/shared/models';
import { FormGroup, FormControl } from '@angular/forms';
import { FormValidator } from '@/core/services';
@Component({
  selector: 'app-edit-role-dialog-form',
  templateUrl: './edit-role-dialog-form.component.html',
  styleUrls: ['./edit-role-dialog-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EditRoleDialogFormComponent extends AEditComponent<RoleModel> {
  constructor(
    public formValidator: FormValidator,
  ) {
    super();
  }
  protected createForm(data: RoleModel): FormGroup {
    return new FormGroup({
      name: new FormControl(data.name, this.formValidator.validNoEmpty),
      description: new FormControl(data.description),
    });
  }



}

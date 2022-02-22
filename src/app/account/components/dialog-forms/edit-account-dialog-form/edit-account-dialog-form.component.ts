import { Component, ViewEncapsulation } from '@angular/core';
import { AEditComponentWithValidate, AccountModel, RoleModel } from '@/shared/models';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { FormValidator } from '@/core/services';
import { RoleQuery } from '@/store/queries';
@Component({
  selector: 'app-edit-account-dialog-form',
  templateUrl: './edit-account-dialog-form.component.html',
  styleUrls: ['./edit-account-dialog-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EditAccountDialogFormComponent extends AEditComponentWithValidate<AccountModel> {
  roles$: Observable<RoleModel[]>;
  constructor(
    public formValidator: FormValidator,
    roleQuery: RoleQuery
  ) {
    super(formValidator);
    this.roles$ = roleQuery.selectAll();
  }
  protected createForm(data: AccountModel): FormGroup {
    return new FormGroup({
      username: new FormControl(data.username, this.formValidator.validNoEmpty),
      passwordText: new FormControl(data.passwordText),
      avatar: new FormControl(data.avatar),
      roles: new FormControl(data.roles ? data.roles : [])
    });
  }



}

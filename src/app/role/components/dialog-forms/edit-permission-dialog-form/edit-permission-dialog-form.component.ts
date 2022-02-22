import { Component, ViewEncapsulation } from '@angular/core';
import { PermissionModel, AEditComponent, RestrictionModel } from '@/shared/models';
import { FormGroup, FormControl } from '@angular/forms';
import { FormValidator } from '@/core/services';
import { PermissionQuery } from '@/store/queries';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-permission-dialog-form',
  templateUrl: './edit-permission-dialog-form.component.html',
  styleUrls: ['./edit-permission-dialog-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EditPermissionDialogFormComponent extends AEditComponent<PermissionModel> {
  restrictions$ = new Observable<RestrictionModel[]>();
  constructor(
    private formValidator: FormValidator,
    private permissionQuery: PermissionQuery
  ) {
    super();
    this.restrictions$ = this.permissionQuery.selectRestrictions();
  }
  protected createForm(data: PermissionModel): FormGroup {
    return new FormGroup({
      name: new FormControl(data.name, this.formValidator.validNoEmpty),
      description: new FormControl(data.description),
      restrictions: new FormControl(data.restrictions),
    });
  }



}

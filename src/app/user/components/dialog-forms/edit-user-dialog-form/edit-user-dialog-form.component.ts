import { Component, ViewEncapsulation } from '@angular/core';
import { AEditComponentWithValidate, UserModel, DiseaseItemModel, AEditComponent } from '@/shared/models';
import { FormGroup, FormControl } from '@angular/forms';
import { FormValidator } from '@/core/services';
import { DiseaseItemApiService } from '@/core/apis';
import { startWith } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { DiseaseItemQuery } from '@/store/queries';
@Component({
  selector: 'app-edit-user-dialog-form',
  templateUrl: './edit-user-dialog-form.component.html',
  styleUrls: ['./edit-user-dialog-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EditUserDialogFormComponent extends AEditComponent<UserModel> {
  deseases$: Observable<DiseaseItemModel[]>;
  constructor(
    public formValidator: FormValidator,
    private diseaseQuery: DiseaseItemQuery
  ) {
    super();
    this.deseases$ = this.diseaseQuery.selectAll();
  }
  protected createForm(data: UserModel): FormGroup {
    return new FormGroup({
      type: new FormControl(data.type),
      diseaseCategories: new FormControl(data.diseaseCategories),
    });
  }
  initForm(data: UserModel) {
    super.initForm(data);
    this.formGroup.get('type').valueChanges.pipe(startWith(data.type)).subscribe(v => {
      const diseasesCtrl = this.formGroup.get('diseaseCategories');
      if (v === 'SPECIALIST') {
        diseasesCtrl.enable();
      } else {
        diseasesCtrl.disable();
      }
    });
  }

  getValue() {
    const newValue = super.getValue();
    if (newValue.type !== 'SPECIALIST') {
      delete newValue.diseaseCategories;
    }
    return newValue;
  }



}

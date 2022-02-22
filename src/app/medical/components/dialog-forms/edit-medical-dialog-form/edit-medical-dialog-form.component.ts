import { Component, ViewEncapsulation } from '@angular/core';
import { MedicalItemModel, DiseaseItemModel, AEditComponent } from '@/shared/models';
import { FormGroup, FormControl } from '@angular/forms';
import { FormValidator } from '@/core/services';
import { startWith } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { DiseaseItemQuery } from '@/store/queries';
@Component({
  selector: 'app-edit-medical-dialog-form',
  templateUrl: './edit-medical-dialog-form.component.html',
  styleUrls: ['./edit-medical-dialog-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EditMedicalDialogFormComponent extends AEditComponent<MedicalItemModel> {
  deseases$: Observable<DiseaseItemModel[]>;
  constructor(
    public formValidator: FormValidator,
  ) {
    super();
  }
  protected createForm(data: MedicalItemModel): FormGroup {
    return new FormGroup({
      sku: new FormControl(data.sku),
      name: new FormControl(data.name),
      symptom: new FormControl(data.symptom),
      price: new FormControl(data.price),
      ingredient: new FormControl(data.ingredient),
    });
  }




}


import { Injectable } from '@angular/core';
import { BaseItemQuery } from '@/shared/store';
import { MedicalItemModel } from '@/shared/models';
import { MedicalItemState, MedicalItemStore } from '../stores/medical-item.store';
@Injectable()
export class MedicalItemQuery extends BaseItemQuery< MedicalItemModel, MedicalItemState> {

  constructor(protected store: MedicalItemStore) {
    super(store);
  }

}


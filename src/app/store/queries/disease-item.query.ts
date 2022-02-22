import { Injectable } from '@angular/core';
import { BaseItemQuery } from '@/shared/store';
import { DiseaseItemModel } from '@/shared/models';
import { DiseaseItemState, DiseaseItemStore } from '../stores';
@Injectable()
export class DiseaseItemQuery extends BaseItemQuery<DiseaseItemModel, DiseaseItemState> {

  constructor(protected store: DiseaseItemStore) {
    super(store);
  }

}


import { StoreConfig } from '@datorama/akita';
import { DiseaseItemModel } from '@/shared/models';
import { Injectable } from '@angular/core';
import { BaseItemState, BaseItemStore } from '@/shared/store';

export interface DiseaseItemState extends BaseItemState<DiseaseItemModel> {}
@Injectable()
@StoreConfig({ name: 'disease-item' })
export class DiseaseItemStore extends BaseItemStore<DiseaseItemModel, DiseaseItemState> {

}



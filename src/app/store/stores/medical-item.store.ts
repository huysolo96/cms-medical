import { StoreConfig } from '@datorama/akita';
import { Injectable } from '@angular/core';
import { BaseItemState, BaseItemStore } from '@/shared/store';
import { MedicalItemModel } from '@/shared/models';

export interface MedicalItemState extends BaseItemState<MedicalItemModel> {}
@Injectable()
@StoreConfig({ name: 'Medical-item' })
export class MedicalItemStore extends BaseItemStore<MedicalItemModel, MedicalItemState> {

}



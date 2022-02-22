import { StoreConfig } from '@datorama/akita';
import { BaseCategoryState, BaseCategoryStore } from '@/shared/store';
import { DiseaseCategoryModel } from '@/shared/models';
import { Injectable } from '@angular/core';

export interface DiseaseCategoryState extends BaseCategoryState<DiseaseCategoryModel> {}
@Injectable()
@StoreConfig({ name: 'disease-category' })
export class DiseaseCategoryStore extends BaseCategoryStore<DiseaseCategoryModel, DiseaseCategoryState> {


}



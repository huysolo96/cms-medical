import { Injectable } from '@angular/core';
import { BaseCategoryQuery } from '@/shared/store';
import { DiseaseCategoryModel } from '@/shared/models';
import { DiseaseCategoryState, DiseaseCategoryStore } from '../stores';
@Injectable()
export class DiseaseCategoryQuery extends BaseCategoryQuery<DiseaseCategoryModel, DiseaseCategoryState> {

  constructor(protected store: DiseaseCategoryStore) {
    super(store);
  }

}


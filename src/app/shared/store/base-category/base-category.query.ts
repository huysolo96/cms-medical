import { BaseCategoryStore, BaseCategoryState, } from './base-category.store';
import { BaseCategoryModel } from '@/shared/models';
import { BasePagingQuery } from '../base-paging';

export class BaseCategoryQuery<M extends BaseCategoryModel, S extends BaseCategoryState<M>> extends BasePagingQuery<M, S> {

  constructor(protected store: BaseCategoryStore<M, S>) {
    super(store);
  }

}


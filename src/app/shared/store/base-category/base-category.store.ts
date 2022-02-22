import { BaseCategoryModel } from '@/shared/models';
import { BasePagingState, BasePagingStore } from '../base-paging';

export interface BaseCategoryState<T extends BaseCategoryModel> extends BasePagingState<T> {}

export class BaseCategoryStore<M extends BaseCategoryModel, S extends BaseCategoryState<M>> extends BasePagingStore<M, S> {

}


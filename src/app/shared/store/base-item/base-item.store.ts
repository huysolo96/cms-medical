import { BaseItemModel } from '@/shared/models';
import { BasePagingState, BasePagingStore } from '../base-paging';

export interface BaseItemState<T extends BaseItemModel> extends BasePagingState<T> {}

export class BaseItemStore<M extends BaseItemModel, S extends BaseItemState<M>>
  extends BasePagingStore<M, S> {

}




import { BaseItemStore, BaseItemState, } from './base-item.store';
import { BaseItemModel } from '@/shared/models';
import { BasePagingQuery } from '../base-paging';

export class BaseItemQuery<M extends BaseItemModel, S extends BaseItemState<M>>
  extends BasePagingQuery<M, S> {

  constructor(protected store: BaseItemStore<M, S>) {
    super(store);
  }

}

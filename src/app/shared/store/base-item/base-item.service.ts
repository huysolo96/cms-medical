import { BaseItemState } from './base-item.store';
import { BaseItemModel } from '@/shared/models';
import { BasePagingService } from '../base-paging';
import { ItemParamsModel } from '@/shared/models/params';

export abstract class BaseItemService<M extends BaseItemModel, S extends BaseItemState<M>>
  extends BasePagingService<M, S, ItemParamsModel> {

}

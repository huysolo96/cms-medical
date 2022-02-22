import { BaseItemModel } from '../models';
import { PagingCrudService } from './crud.service';
import { ItemParamsModel } from '../models/params';

export abstract class BaseItemCrudService<T extends BaseItemModel> extends PagingCrudService<T, ItemParamsModel>  {
}

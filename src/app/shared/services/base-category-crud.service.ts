import { BaseCategoryModel } from '../models';
import { PagingCrudService } from './crud.service';

export abstract class BaseCategoryCrudService<T extends BaseCategoryModel> extends PagingCrudService<T> {


}

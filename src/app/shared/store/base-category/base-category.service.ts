import { BaseCategoryState } from './base-category.store';
import { BaseCategoryModel } from '@/shared/models';
import { BasePagingService } from '../base-paging';

export abstract class BaseCategoryService<M extends BaseCategoryModel, S extends BaseCategoryState<M>> extends BasePagingService<M, S> {

}


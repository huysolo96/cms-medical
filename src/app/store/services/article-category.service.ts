import { BaseCategoryService } from '@/shared/store';
import { ArticleCategoryModel } from '@/shared/models';
import { Injectable } from '@angular/core';
import { ArticleCategoryApiService } from '@/core/apis';
import { ArticleCategoryState, ArticleCategoryStore } from '../stores';
import { PagingService } from '@/core/services';
@Injectable()
export class ArticleCategoryService extends BaseCategoryService<ArticleCategoryModel, ArticleCategoryState> {

  constructor(
    protected categoryStore: ArticleCategoryStore,
    protected apiService: ArticleCategoryApiService,
    protected pagingService: PagingService,
  ) {
    super(categoryStore, apiService, pagingService);
  }

}


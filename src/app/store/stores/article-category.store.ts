import { StoreConfig } from '@datorama/akita';
import { BaseCategoryState, BaseCategoryStore } from '@/shared/store/base-category';
import { ArticleCategoryModel } from '@/shared/models';
import { Injectable } from '@angular/core';

export interface ArticleCategoryState extends BaseCategoryState<ArticleCategoryModel> {}
@Injectable()
@StoreConfig({ name: 'article-category' })
export class ArticleCategoryStore extends BaseCategoryStore<ArticleCategoryModel, ArticleCategoryState> {


}



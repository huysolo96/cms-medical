import { Injectable } from '@angular/core';
import { BaseCategoryQuery } from '@/shared/store';
import { ArticleCategoryModel } from '@/shared/models';
import { ArticleCategoryStore, ArticleCategoryState } from '../stores';

@Injectable()
export class ArticleCategoryQuery extends BaseCategoryQuery<ArticleCategoryModel, ArticleCategoryState> {

  constructor(protected store: ArticleCategoryStore) {
    super(store);
  }

}


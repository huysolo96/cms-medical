import { Injectable } from '@angular/core';
import { BaseItemQuery } from '@/shared/store';
import { ArticleItemModel } from '@/shared/models';
import { ArticleItemState, ArticleItemStore } from '../stores';
@Injectable()
export class ArticleItemQuery extends BaseItemQuery< ArticleItemModel, ArticleItemState> {

  constructor(protected store: ArticleItemStore) {
    super(store);
  }

}


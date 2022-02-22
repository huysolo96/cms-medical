import { StoreConfig } from '@datorama/akita';
import { ArticleItemModel } from '@/shared/models';
import { Injectable } from '@angular/core';
import { BaseItemState, BaseItemStore } from '@/shared/store';

export interface ArticleItemState extends BaseItemState<ArticleItemModel> {}
@Injectable()
@StoreConfig({ name: 'article-item' })
export class ArticleItemStore extends BaseItemStore<ArticleItemModel, ArticleItemState> {

}



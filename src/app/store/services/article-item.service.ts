import { ArticleItemStore, ArticleItemState } from '../stores';
import { BaseItemService } from '@/shared/store';
import { ArticleItemModel } from '@/shared/models';
import { Injectable } from '@angular/core';
import { ArticleItemApiService } from '@/core/apis';
import { PagingService } from '@/core/services';
@Injectable()
export class ArticleItemService extends BaseItemService<ArticleItemModel, ArticleItemState> {

  constructor(
    protected itemStore: ArticleItemStore,
    protected apiService: ArticleItemApiService,
    protected pagingService: PagingService,
  ) {
    super(itemStore, apiService, pagingService);
  }

}

import { BaseItemService } from '@/shared/store';
import { Injectable } from '@angular/core';
import { PagingService } from '@/core/services';
import { QuestionItemApiService } from '@/core/apis';
import { QuestionItemModel } from '@/shared/models';
import { QuestionItemState, QuestionItemStore } from '../stores';
@Injectable()
export class QuestionItemService extends BaseItemService<QuestionItemModel, QuestionItemState> {

  constructor(
    protected itemStore: QuestionItemStore,
    protected apiService: QuestionItemApiService,
    protected pagingService: PagingService,
  ) {
    super(itemStore, apiService, pagingService);
  }

}

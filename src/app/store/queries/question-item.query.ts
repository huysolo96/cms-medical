import { Injectable } from '@angular/core';
import { BaseItemQuery } from '@/shared/store';
import { QuestionItemModel } from '@/shared/models';
import { QuestionItemStore, QuestionItemState } from '../stores';
@Injectable()
export class QuestionItemQuery extends BaseItemQuery<QuestionItemModel, QuestionItemState> {

  constructor(protected store: QuestionItemStore) {
    super(store);
  }

}


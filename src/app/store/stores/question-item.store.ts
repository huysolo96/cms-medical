import { StoreConfig } from '@datorama/akita';
import { QuestionItemModel } from '@/shared/models';
import { Injectable } from '@angular/core';
import { BaseItemState, BaseItemStore } from '@/shared/store';

export interface QuestionItemState extends BaseItemState<QuestionItemModel> {}
@Injectable()
@StoreConfig({ name: 'question-item' })
export class QuestionItemStore extends BaseItemStore<QuestionItemModel, QuestionItemState> {

}



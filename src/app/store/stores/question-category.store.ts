import { StoreConfig } from '@datorama/akita';
import { BaseCategoryState, BaseCategoryStore } from '@/shared/store';
import { QuestionCategoryModel } from '@/shared/models';
import { Injectable } from '@angular/core';

export interface QuestionCategoryState extends BaseCategoryState<QuestionCategoryModel> {}
@Injectable()
@StoreConfig({ name: 'question-category' })
export class QuestionCategoryStore extends BaseCategoryStore<QuestionCategoryModel, QuestionCategoryState> {

}



import { Injectable } from '@angular/core';
import { BaseCategoryQuery } from '@/shared/store';
import { QuestionCategoryModel } from '@/shared/models';
import { QuestionCategoryStore, QuestionCategoryState } from '../stores';
@Injectable()
export class QuestionCategoryQuery extends BaseCategoryQuery<QuestionCategoryModel, QuestionCategoryState> {

  constructor(protected store: QuestionCategoryStore) {
    super(store);
  }

}


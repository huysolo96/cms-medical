import { QuestionCategoryModel, QuestionItemModel } from '@/shared/models/question.model';
import { Injectable } from '@angular/core';
import { BaseCategoryItemQuery } from '@/shared/store';
import { QuestionItemQuery } from './question-item.query';
import { QuestionCategoryQuery } from './question-category.query';

@Injectable()
export class QuestionCategoryItemQuery extends BaseCategoryItemQuery<QuestionItemModel, QuestionCategoryModel> {
    constructor(protected itemQuery: QuestionItemQuery, protected categoryQuery: QuestionCategoryQuery) {
        super(itemQuery, categoryQuery);
    }
}

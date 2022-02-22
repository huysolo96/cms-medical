import { BaseItemModel } from './base-item.model';
import { BaseCategoryModel } from './base-category.model';

export interface QuestionCategoryModel extends BaseCategoryModel {
}

export interface QuestionItemModel extends BaseItemModel {
    question: string;
    answer: string;
}

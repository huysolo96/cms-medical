import { BaseItemModel } from './base-item.model';
import { BaseCategoryModel } from './base-category.model';

export interface ArticleCategoryModel extends BaseCategoryModel {
}

export interface ArticleItemModel extends BaseItemModel {
    name: string;
    description: string;
    content: string;
    thumbnail: string;
}

export type  ArticleCategoryItemModel =  ArticleItemModel & {
    categories: ArticleCategoryModel[]
};



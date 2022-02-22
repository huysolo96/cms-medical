import { BaseCategoryItemQuery } from '@/shared/store';
import { ArticleItemModel, ArticleCategoryModel } from '@/shared/models';
import { ArticleItemQuery } from './article-item.query';
import { ArticleCategoryQuery } from './article-category.query';
import { Injectable } from '@angular/core';
@Injectable()
export class ArticleCategoryItemQuery extends BaseCategoryItemQuery<ArticleItemModel, ArticleCategoryModel> {
    constructor(protected itemQuery: ArticleItemQuery, protected categoryQuery: ArticleCategoryQuery) {
        super(itemQuery, categoryQuery);
    }
}

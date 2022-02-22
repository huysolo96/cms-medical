import { ArticleCategoryStore, DiseaseCategoryStore, GroupCategoryStore, QuestionCategoryStore } from '../stores';
import { entityQueryGenrator } from '@/shared/store';

export const ARTICLE_CATEGORY_QUERY = 'ARTICLE_CATEGORY_QUERY';
export const DISEASE_CATEGORY_QUERY = 'DISEASE_CATEGORY_QUERY';
export const GROUP_CATEGORY_QUERY = 'GROUP_CATEGORY_QUERY';
export const QUESTION_CATEGORY_QUERY = 'QUESTION_CATEGORY_QUERY';

export const categoryQueries = [
    entityQueryGenrator(ArticleCategoryStore, ARTICLE_CATEGORY_QUERY),
    entityQueryGenrator(DiseaseCategoryStore, DISEASE_CATEGORY_QUERY),
    entityQueryGenrator(GroupCategoryStore, GROUP_CATEGORY_QUERY),
    entityQueryGenrator(QuestionCategoryStore, QUESTION_CATEGORY_QUERY),
];

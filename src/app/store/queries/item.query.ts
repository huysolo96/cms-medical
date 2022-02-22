import { entityQueryGenrator } from '@/shared/store';
import { ArticleItemStore, DiseaseItemStore, GroupItemStore, QuestionItemStore } from '../stores';

export const ARTICLE_ITEM_QUERY = 'ARTICLE_ITEM_QUERY';
export const DISEASE_ITEM_QUERY = 'DISEASE_ITEM_QUERY';
export const GROUP_ITEM_QUERY = 'GROUP_ITEM_QUERY';
export const QUESTION_ITEM_QUERY = 'QUESTION_ITEM_QUERY';

export const itemQueries = [
    entityQueryGenrator(ArticleItemStore, ARTICLE_ITEM_QUERY),
    entityQueryGenrator(DiseaseItemStore, DISEASE_ITEM_QUERY),
    entityQueryGenrator(GroupItemStore, GROUP_ITEM_QUERY),
    entityQueryGenrator(QuestionItemStore, QUESTION_ITEM_QUERY),
];

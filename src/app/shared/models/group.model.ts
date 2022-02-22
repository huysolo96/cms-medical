import { BaseItemModel } from './base-item.model';
import { BaseCategoryModel } from './base-category.model';

export interface GroupCategoryModel extends BaseCategoryModel {
}

export interface GroupItemModel extends BaseItemModel {
    name: string;
    description: string;
    avatar: string;
    specialist: string[];
    needApproved: boolean;
}

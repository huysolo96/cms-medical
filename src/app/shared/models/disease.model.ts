import { BaseItemModel } from './base-item.model';
import { BaseCategoryModel } from './base-category.model';

export interface DiseaseCategoryModel extends BaseCategoryModel {
}

export interface DiseaseItemModel extends BaseItemModel {
    name: string;
    description: string;
    specialist: string[];
}

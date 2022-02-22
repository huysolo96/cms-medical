import { BaseModel } from '@/shared/models';

export interface BaseCategoryModel extends BaseModel {
    description: string;
    name: string;
}

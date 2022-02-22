import { BaseCategoryItemQuery } from '@/shared/store';

import { DiseaseItemModel, DiseaseCategoryModel } from '@/shared/models';
import { DiseaseItemQuery } from './disease-item.query';
import { DiseaseCategoryQuery } from './disease-category.query';
import { Injectable } from '@angular/core';

@Injectable()
export class DiseaseCategoryItemQuery extends BaseCategoryItemQuery<DiseaseItemModel, DiseaseCategoryModel> {
    constructor(protected itemQuery: DiseaseItemQuery, protected categoryQuery: DiseaseCategoryQuery) {
        super(itemQuery, categoryQuery);
    }
}

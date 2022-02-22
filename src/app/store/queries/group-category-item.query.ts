import { Injectable } from '@angular/core';

import { BaseCategoryItemQuery } from '@/shared/store';

import { GroupItemModel, GroupCategoryModel } from '@/shared/models';
import { GroupCategoryQuery } from './group-category.query';
import { GroupItemQuery } from './group-item.query';


@Injectable()
export class GroupCategoryItemQuery extends BaseCategoryItemQuery<GroupItemModel, GroupCategoryModel> {
    constructor(protected itemQuery: GroupItemQuery, protected categoryQuery: GroupCategoryQuery) {
        super(itemQuery, categoryQuery);
    }
}

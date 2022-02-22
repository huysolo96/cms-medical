import { Injectable } from '@angular/core';
import { BaseCategoryQuery } from '@/shared/store';
import { GroupCategoryModel } from '@/shared/models';
import { GroupCategoryState, GroupCategoryStore } from '../stores';
@Injectable()
export class GroupCategoryQuery extends BaseCategoryQuery<GroupCategoryModel, GroupCategoryState> {

  constructor(protected store: GroupCategoryStore) {
    super(store);
  }

}


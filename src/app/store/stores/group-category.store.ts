import { StoreConfig } from '@datorama/akita';
import { BaseCategoryState, BaseCategoryStore } from '@/shared/store';
import { GroupCategoryModel } from '@/shared/models';
import { Injectable } from '@angular/core';

export interface GroupCategoryState extends BaseCategoryState<GroupCategoryModel> {}
@Injectable()
@StoreConfig({ name: 'group-category' })
export class GroupCategoryStore extends BaseCategoryStore<GroupCategoryModel, GroupCategoryState> {

}



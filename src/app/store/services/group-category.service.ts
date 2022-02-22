import { GroupCategoryStore, GroupCategoryState } from '../stores';
import { BaseCategoryService } from '@/shared/store';
import { GroupCategoryModel } from '@/shared/models';
import { Injectable } from '@angular/core';
import { GroupCategoryApiService } from '@/core/apis';
import { PagingService } from '@/core/services';
@Injectable()
export class GroupCategoryService extends BaseCategoryService<GroupCategoryModel, GroupCategoryState> {

  constructor(
    protected categoryStore: GroupCategoryStore,
    protected apiService: GroupCategoryApiService,
    protected pagingService: PagingService,
  ) {
    super(categoryStore, apiService, pagingService);
  }
}

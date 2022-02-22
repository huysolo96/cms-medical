import { GroupItemStore, GroupItemState } from '../stores';
import { BaseItemService } from '@/shared/store';
import { GroupItemModel } from '@/shared/models';
import { Injectable } from '@angular/core';
import { PagingService } from '@/core/services';
import { GroupItemApiService } from '@/core/apis';
@Injectable()
export class GroupItemService extends BaseItemService<GroupItemModel, GroupItemState> {

  constructor(
    protected itemStore: GroupItemStore,
    protected apiService: GroupItemApiService,
    protected pagingService: PagingService,
  ) {
    super(itemStore, apiService, pagingService);
  }

}

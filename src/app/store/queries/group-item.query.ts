import { Injectable } from '@angular/core';
import { BaseItemQuery } from '@/shared/store';
import { GroupItemModel } from '@/shared/models';
import { GroupItemState, GroupItemStore } from '../stores';
@Injectable()
export class GroupItemQuery extends BaseItemQuery<GroupItemModel, GroupItemState> {

  constructor(protected store: GroupItemStore) {
    super(store);
  }

}


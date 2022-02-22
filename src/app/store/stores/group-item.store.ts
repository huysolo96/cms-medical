import { StoreConfig } from '@datorama/akita';
import { GroupItemModel } from '@/shared/models';
import { Injectable } from '@angular/core';
import { BaseItemState, BaseItemStore } from '@/shared/store';

export interface GroupItemState extends BaseItemState<GroupItemModel> {}
@Injectable()
@StoreConfig({ name: 'group-item' })
export class GroupItemStore extends BaseItemStore<GroupItemModel, GroupItemState> {

}



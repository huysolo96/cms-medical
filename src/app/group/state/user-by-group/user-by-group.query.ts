import { UserByGroupStore } from './user-by-group.store';
import { UserQuery } from '@/store/queries';
import { Injectable } from '@angular/core';
import { QueryConfig, Order } from '@datorama/akita';
@Injectable()
@QueryConfig({
  sortBy: 'createdAt',
  sortByOrder: Order.ASC
})
export class UserByGroupQuery extends UserQuery {

  constructor(protected store: UserByGroupStore) {
    super(store);
  }

}

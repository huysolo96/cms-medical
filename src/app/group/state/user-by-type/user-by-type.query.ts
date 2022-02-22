import { UserByTypeStore } from './user-by-type.store';
import { UserQuery } from '@/store/queries';
import { Injectable } from '@angular/core';
import { QueryConfig, Order } from '@datorama/akita';
@Injectable()
@QueryConfig({
  sortBy: 'createdAt',
  sortByOrder: Order.ASC
})
export class UserByTypeQuery extends UserQuery {

  constructor(protected store: UserByTypeStore) {
    super(store);
  }

}



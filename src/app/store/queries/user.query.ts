import { UserModel } from '@/shared/models';
import { UserState, UserStore } from '../stores';
import { BasePagingQuery } from '@/shared/store';


export class UserQuery extends BasePagingQuery<UserModel, UserState> {

  constructor(protected store: UserStore) {
    super(store);
  }

}

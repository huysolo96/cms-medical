import { AccountModel } from '@/shared/models';
import { AccountState, AccountStore } from '../stores';
import { BasePagingQuery } from '@/shared/store';


export class AccountQuery extends BasePagingQuery<AccountModel, AccountState> {

  constructor(protected store: AccountStore) {
    super(store);
  }

}

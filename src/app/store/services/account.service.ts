import { AccountStore, AccountState } from '../stores';
import { BasePagingService } from '@/shared/store';
import { AccountModel } from '@/shared/models';
import { AccountApiService } from '@/core/apis';
import { PagingService } from '@/core/services';
import { AccountParams } from '@/shared/models/params/account-param.model.ts';

export class AccountService extends BasePagingService<AccountModel, AccountState, AccountParams> {

  constructor(
    protected accountStore: AccountStore,
    protected apiService: AccountApiService,
    protected pagingService: PagingService
  ) {
    super(accountStore, apiService, pagingService);
  }

}

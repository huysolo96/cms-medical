import { StoreConfig } from '@datorama/akita';
import { AccountModel } from '@/shared/models';
import { BasePagingStore, BasePagingState } from '@/shared/store';

export interface AccountState extends BasePagingState<AccountModel> {}

@StoreConfig({ name: 'account' })
export class AccountStore extends BasePagingStore<AccountModel, AccountState> {

}

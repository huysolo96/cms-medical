import { StoreConfig } from '@datorama/akita';
import { UserModel } from '@/shared/models';
import { BasePagingStore, BasePagingState } from '@/shared/store';

export interface UserState extends BasePagingState<UserModel> {}

@StoreConfig({ name: 'user' })
export class UserStore<T extends UserState = UserState> extends BasePagingStore<UserModel, T> {

}

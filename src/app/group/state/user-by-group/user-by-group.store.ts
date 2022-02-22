import { StoreConfig } from '@datorama/akita';
import { UserState, UserStore } from '@/store/stores';
import { Injectable, InjectionToken, inject, Provider } from '@angular/core';
import { GroupUserApiService } from '@/core/apis';
import { GroupUserService } from '@/store/services/group-user.service';

export interface UserByGroupState extends UserState {
}
@Injectable()
@StoreConfig({ name: 'userByGroup' })
export class UserByGroupStore extends UserStore<UserByGroupState> {

}


export const UserByGroupToken = 'UserByGroupToken';

export const UserByGroup: Provider = {
    provide: UserByGroupToken,
    useFactory: (store: UserStore, apiService: GroupUserApiService) => new GroupUserService(store, apiService),
    deps: [
        UserByGroupStore,
        GroupUserApiService
    ]
};


import { StoreConfig } from '@datorama/akita';
import { UserState, UserStore } from '@/store/stores';
import { Injectable } from '@angular/core';

export interface UserByTypeState extends UserState {
}
@Injectable()
@StoreConfig({ name: 'userByType' })
export class UserByTypeStore extends UserStore<UserByTypeState> {

}


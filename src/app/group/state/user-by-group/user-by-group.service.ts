import { UserByGroupStore } from './user-by-group.store';
import { UserService } from '@/store/services';
import { PagingService } from '@/core/services';
import { UserApiService } from '@/core/apis';
import { Injectable } from '@angular/core';
@Injectable()
export class UserByGroupService extends UserService {

  constructor(
    protected userByGroupStore: UserByGroupStore,
    protected pagingService: PagingService,
    protected apiService: UserApiService,
  ) {
    super(userByGroupStore, apiService, pagingService);
  }




}


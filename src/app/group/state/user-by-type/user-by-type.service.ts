import { UserByTypeStore } from './user-by-type.store';
import { UserService } from '@/store/services';
import { PagingService } from '@/core/services';
import { UserApiService } from '@/core/apis';
import { Injectable } from '@angular/core';
@Injectable()
export class UserByTypeService extends UserService {

  constructor(
    protected userByTypeStore: UserByTypeStore,
    protected pagingService: PagingService,
    protected apiService: UserApiService
  ) {
    super(userByTypeStore, apiService, pagingService);
  }



}
import { UserStore, UserState } from '../stores';
import { BasePagingService } from '@/shared/store';
import { UserModel } from '@/shared/models';
import { UserApiService } from '@/core/apis';
import { PagingService } from '@/core/services';
import { UserParams, PageParams, UserParamsBody } from '@/shared/models/params';
import { map } from 'rxjs/operators';

export class UserService extends BasePagingService<UserModel, UserState, UserParams> {

  constructor(
    protected userStore: UserStore,
    protected apiService: UserApiService,
    protected pagingService: PagingService,
  ) {
    super(userStore, apiService, pagingService);
  }


  getFilterUserParam(params: Partial<PageParams>, body: Partial<UserParamsBody>) {
    this.userStore.setLoading(true);
    return this.apiService.filterUsersParam(params, body).pipe(map(res => {
      this.userStore.setLoading(false);
      if (res) {
        this.userStore.set(res.content);
      }
    }));
  }


  loadMoreFilterUserParam(params: Partial<PageParams>, body: Partial<UserParamsBody>) {
    this.userStore.setLoading(true);
    return this.apiService.filterUsersParam(params, body).pipe(map(res => {
      this.userStore.setLoading(false);
      if (res) {
        if (params.page === 0) {
          this.userStore.set(res.content);
        } else {
          this.userStore.add(res.content);
        }
      }
    }));
  }

  setParam(userParam: UserParamsBody) {
    this.userStore._setState((state) => ({
      ...state,
      param: userParam
    }));
  }

}

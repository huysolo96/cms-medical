import { Injectable } from '@angular/core';
import { PagingCrudService } from '@/shared/services';
import { UserModel, UserInfoModel, PagingWithContent } from '@/shared/models';
import { environment } from '@/environment';
import { PageParams } from '@/shared/models/params';
import { UserParamsBody } from '@/shared/models/params/user-param.model';

@Injectable()
export class UserApiService extends PagingCrudService<UserModel> {

  protected createUrl(): string {
    return environment.admin.user;
  }

  login(userInfo: UserInfoModel) {
    return this.http.post<UserModel>(`${this.baseUrl}/login`, userInfo);
  }

  filterUsersParam(params: Partial<PageParams>, body: Partial<UserParamsBody>) {
    return this.http.post<PagingWithContent<UserModel>>(`${this.baseUrl}/filter`, body, {
      params: params as any
    });
  }
}

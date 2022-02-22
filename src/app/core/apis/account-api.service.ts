import { Injectable } from '@angular/core';
import { PagingCrudService } from '@/shared/services';
import { AccountModel, UserInfoModel } from '@/shared/models';
import { environment } from '@/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AccountApiService extends PagingCrudService<AccountModel> {
  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  protected createUrl(): string {
    return environment.admin.account;
  }

  login(userInfo: UserInfoModel) {
    return this.http.post<AccountModel>(`${this.baseUrl}/login`, userInfo);
  }
}

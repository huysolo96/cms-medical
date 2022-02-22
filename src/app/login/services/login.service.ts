import { Injectable } from '@angular/core';
import { AccountApiService } from '@/core/apis';
import { UserInfoModel } from '@/shared/models';
import { AuthService } from '@/core/auths';
import { of } from 'rxjs';

@Injectable()
export class LoginService {

  constructor(
    protected loginApi: AccountApiService,
    protected authService: AuthService
  ) { }


  login(userInfo: UserInfoModel) {
    this.authService.storeUser(this.loginApi.login(userInfo));
  }
}

@Injectable()
export class MockLoginService extends LoginService {
  login(userInfo: UserInfoModel) {
    this.authService.storeUser(of({
      createdByUserId: '1',
      updatedByUserId: '1',
      passwordText: '',
      salt: '',
      token: 'token',
      lastJwt: 'jwt',
      roles: [],
      typeLogin: 'account',
      avatar: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Flaoli1258%2Fcat-meme%2F&psig=AOvVaw3D6jvFJfKZHT0vpHx4vy_C&ust=1645628367166000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJit7cPJk_YCFQAAAAAdAAAAABAN',
      id: '',
      status: 'actived',
      updatedAt: '',
      createdAt: '',
      ...userInfo
    }));
  }
}

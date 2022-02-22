import { Injectable } from '@angular/core';
import { AccountModel } from '@/shared/models';
import { Router } from '@angular/router';
import { StorageMap } from '@ngx-pwa/local-storage';
import { Observable } from 'rxjs';

const USER_INFO = 'userInfo';

@Injectable()
export class AuthService {
  constructor(private router: Router, private storageMap: StorageMap) {

  }

  storeUser(account$: Observable<AccountModel>) {
    account$.subscribe(account => {
      this.storageMap.set(USER_INFO, account).subscribe(() => {
        this.navigateToApp();
      });
    });
  }

  get isLogin() {
    return this.storageMap.has(USER_INFO);
  }

  get userInfo() {
    return this.storageMap.get(USER_INFO) as Observable<AccountModel> ;
  }

  logout() {
    this.storageMap.delete(USER_INFO).subscribe(() => {
      this.navigateToLogin();
    });
  }

  navigateToLogin() {
    this.router.navigateByUrl('/login');
  }

  navigateToApp() {
    this.router.navigateByUrl('/app');
  }
}

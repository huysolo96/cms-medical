import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '@/core/auths';
import { tap } from 'rxjs/operators';

@Injectable()
export class SessionGuard implements CanActivate {
  constructor(public authService: AuthService) {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.isLogin.pipe(tap(isLogin => {
      if (!isLogin) {
        this.authService.navigateToLogin();
      }
    }));
  }

}

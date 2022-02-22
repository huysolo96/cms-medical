import { Injectable } from '@angular/core';
import { AuthService } from '../auths';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { take, switchMap } from 'rxjs/operators';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(
    private authService: AuthService,
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const currentUser = this.authService.userInfo;
    return currentUser.pipe(
      take(1),
      switchMap(user => {

        if (user && user.lastJwt) {
          request = request.clone({
            setHeaders: {
              Authorization: user.lastJwt
            }
          });
        }
        return next.handle(request);
      })
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { RouterQuery } from '@datorama/akita-ng-router-store';
import { map } from 'rxjs/operators';
import { StorageMap } from '@ngx-pwa/local-storage';
import { AccountModel } from '@/shared/models';
import { Observable } from 'rxjs';
import { AuthService } from '@/core/auths';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title$: Observable<string>;
  user$: Observable<AccountModel>;
  userName$: Observable<string>;

  constructor(router: RouterQuery, private authService: AuthService) {
    this.title$ = router.selectData().pipe(map((data) => data.breadcrumb as string));
    this.user$ = authService.userInfo;
    this.userName$ = this.user$.pipe(map(u => u ? u.username : ''));
  }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
  }

}

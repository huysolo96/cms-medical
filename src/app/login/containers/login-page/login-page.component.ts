import { Component, OnInit } from '@angular/core';
import { LoginService } from '@/login/services';
import { UserInfoModel } from '@/shared/models';
import { MockLoginService } from '@/login/services/login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  providers: [
    {
      provide: LoginService,
      useClass: MockLoginService
    }
  ]
})
export class LoginPageComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  submitInfo(loginInfo: UserInfoModel) {
    this.loginService.login(loginInfo);
  }

}

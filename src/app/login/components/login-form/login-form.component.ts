import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormValidator } from '@/core/services';
import { UserInfoModel } from '@/shared/models';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  @Output() submitInfo = new EventEmitter<UserInfoModel>();
  loginForm = new FormGroup({
    username: new FormControl('', this.formValidatorSv.validNoEmpty),
    passwordText: new FormControl('', this.formValidatorSv.validNoEmpty)
  });
  constructor(public formValidatorSv: FormValidator) { }

  ngOnInit() {
  }

  submitForm() {
    if (this.loginForm.valid) {
      this.submitInfo.emit(this.loginForm.value);
    }
  }

}

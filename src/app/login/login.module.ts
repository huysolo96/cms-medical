import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@/shared/shared.module';
import { components } from './components';
import { LoginRoutes } from './login.routing';
import { containers } from './containers';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { services } from './services';

@NgModule({
  declarations: [
    components,
    containers
  ],
  providers: [
    services
  ],
  imports: [
    CommonModule,
    LoginRoutes,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class LoginModule { }

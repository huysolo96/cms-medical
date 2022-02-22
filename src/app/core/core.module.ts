import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { services } from './services';
import { auths } from './auths';
import { guards } from './guards';
import { HttpClientModule } from '@angular/common/http';
import { apis } from './apis';
import { interceptors } from './interceptors';
@NgModule({
  declarations: [
  ],
  providers: [
    services,
    auths,
    guards,
    interceptors,
    apis
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class CoreModule { }

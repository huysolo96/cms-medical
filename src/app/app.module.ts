import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutes } from './app.routing';
import { CoreModule } from '@/core/core.module';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { AkitaNgRouterStoreModule } from '@datorama/akita-ng-router-store';
import { StoreModule } from './store/store.module';
import { StorageModule } from '@ngx-pwa/local-storage';

import { IconModule } from './icon-module/icon.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    StorageModule.forRoot({
      IDBNoWrap: true,
    }),
    StoreModule,
    AppRoutes,
    BrowserAnimationsModule,
    IconModule,
    AkitaNgDevtools.forRoot(),
    AkitaNgRouterStoreModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

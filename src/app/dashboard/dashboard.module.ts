import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { containers } from './containers';
import { DashboardRoutes } from './dashboard.routing';
import { SharedModule } from '@/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutes,
    SharedModule
  ],
  declarations: [
    containers
  ]
})
export class DashboardModule { }

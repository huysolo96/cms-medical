import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { components } from './components';
import { containers } from './containers';
import { LayoutRoutes } from './layout.routing';
import { SharedModule } from '@/shared/shared.module';


@NgModule({
  declarations: [
    components,
    containers,
  ],
  providers: [
  ],
  imports: [
    CommonModule,
    LayoutRoutes,
    SharedModule,
  ]
})
export class LayoutModule { }

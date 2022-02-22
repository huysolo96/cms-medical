import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { stores } from './stores';
import { services } from './services';
import { queries } from './queries';

@NgModule({
  declarations: [],
  providers: [
    stores,
    services,
    queries
  ],
  imports: [
    CommonModule
  ]
})
export class StoreModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { containers } from './containers';
import { EmployeeRoutes } from './employee.routing';

@NgModule({
  imports: [
    CommonModule,
    EmployeeRoutes
  ],
  declarations: [
    containers
  ]
})
export class EmployeeModule { }

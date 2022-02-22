import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutes } from './user.routing';
import { containers } from './containers';
import { SharedModule } from '@/shared/shared.module';
import { cellComponents as sharedCellComponents } from '@/shared/components/cells';
import { tableFloatingFilterComponents as sharedTableFloatingFilterComponents  } from '@/shared/components/table-float-filter';
import { AgGridModule } from 'ag-grid-angular';
import { components, entryComponents, cellComponents } from './components';

@NgModule({
  imports: [
    CommonModule,
    UserRoutes,
    SharedModule,
    AgGridModule.withComponents([
      ...cellComponents,
      ...sharedTableFloatingFilterComponents,
      ...sharedCellComponents
    ])
  ],
  declarations: [
    containers,
    components
  ],
  entryComponents: [
    entryComponents,
  ]
})
export class UserModule { }

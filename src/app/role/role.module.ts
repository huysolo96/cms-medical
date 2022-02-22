import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleRoutes } from './role.routing';
import { containers } from './containers';
import { SharedModule } from '@/shared/shared.module';
import { components, entryComponents, cellComponents } from './components';
import { cellComponents as sharedCellComponents } from '@/shared/components/cells';
import { tableFloatingFilterComponents as sharedTableFloatingFilterComponents  } from '@/shared/components/table-float-filter';
import { AgGridModule } from 'ag-grid-angular';
@NgModule({
  imports: [
    CommonModule,
    RoleRoutes,
    SharedModule,
    AgGridModule.withComponents([
      ...cellComponents,
      ...sharedTableFloatingFilterComponents,
      ...sharedCellComponents
    ])
  ],
  declarations: [
    containers,
    components,

  ],
  entryComponents: [
    entryComponents
  ]
})
export class RoleModule { }

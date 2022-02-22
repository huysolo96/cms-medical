import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { containers } from './containers';
import { ArticleRoutes } from './article.routing';
import { components, cellComponents, entryComponents } from './components';
import { cellComponents as sharedCellComponents } from '@/shared/components/cells';
import { tableFloatingFilterComponents as sharedTableFloatingFilterComponents  } from '@/shared/components/table-float-filter';
import { AgGridModule } from 'ag-grid-angular';
import { SharedModule } from '@/shared/shared.module';

@NgModule({

  providers: [

  ],
  declarations: [
    containers,
    components,
  ],
  imports: [
    CommonModule,
    ArticleRoutes,
    SharedModule,
    AgGridModule.withComponents([
      ...cellComponents,
      ...sharedTableFloatingFilterComponents,
      ...sharedCellComponents
    ])
  ],
  entryComponents: [
    entryComponents
  ],
  exports: []
})
export class ArticleModule { }

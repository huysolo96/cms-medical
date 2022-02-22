import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconRegistry } from '@angular/material/icon';

import { services } from './services';
import { CustomIconService } from './services';

@NgModule({
  declarations: [],
  providers: [
    services,
    MatIconRegistry
  ],
  imports: [
    CommonModule,
  ]
})

export class IconModule {
  constructor(
    customIconService: CustomIconService,
    matIconRegistry: MatIconRegistry
  ) {
    customIconService.registerDefaultSvgIcons();
    matIconRegistry.registerFontClassAlias('fas');
    matIconRegistry.registerFontClassAlias('fi');
  }
}

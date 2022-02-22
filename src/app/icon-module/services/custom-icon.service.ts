import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { Injectable } from '@angular/core';
import { SvgIconModel } from '../models';
const DEFAULT_SVGICONS: SvgIconModel[] = [
  {
    name: 'employee',
    path: 'assets/custom-icon/employee.svg'

  }
];
@Injectable()
export class CustomIconService {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
  ) { }

  registerDefaultSvgIcons() {
    this.registerSvgIcons(DEFAULT_SVGICONS);
  }

  registerSvgIcons(svgIcons: SvgIconModel[]) {
    svgIcons.forEach(svgIcon => {
      this.registerIconSvg(svgIcon);
    });
  }

  registerIconSvg(svgIcon: SvgIconModel) {
    this.matIconRegistry.addSvgIcon(svgIcon.name, this.domSanitizer.bypassSecurityTrustResourceUrl(svgIcon.path));
  }

}

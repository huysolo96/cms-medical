import { Component, OnInit } from '@angular/core';
import { NavLinks } from '@/shared/models/navigation';

@Component({
  selector: 'app-disease-page',
  templateUrl: './disease-page.component.html',
  styleUrls: ['./disease-page.component.scss']
})
export class DiseasePageComponent implements OnInit {
  navLinks: NavLinks;
  constructor() {
    this.initNavLinks();
  }

  ngOnInit() {
  }

  initNavLinks() {
    this.navLinks = [
      {
        label: 'Danh sách bệnh',
        path: ['item']
      },
      {
        label: 'Danh mục bệnh',
        path: ['category']
      }
    ];
  }

}

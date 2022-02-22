import { Component, OnInit } from '@angular/core';
import { NavLinks } from '@/shared/models/navigation';

@Component({
  selector: 'app-group-page',
  templateUrl: './group-page.component.html',
  styleUrls: ['./group-page.component.scss']
})
export class GroupPageComponent implements OnInit {
  navLinks: NavLinks;
  constructor() {
    this.initNavLinks();
  }

  ngOnInit() {
  }

  initNavLinks() {
    this.navLinks = [
      {
        label: 'Danh sách hội nhóm',
        path: ['item']
      },
      {
        label: 'Danh mục hội nhóm',
        path: ['category']
      }
    ];
  }

}

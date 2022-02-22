import { Component, OnInit } from '@angular/core';
import { NavLinks } from '@/shared/models/navigation';

@Component({
  selector: 'app-role-routing-page',
  templateUrl: './role-routing-page.component.html',
  styleUrls: ['./role-routing-page.component.scss']
})
export class RoleRoutingPageComponent implements OnInit {

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
        path: ['role']
      },
      {
        label: 'Danh mục hội nhóm',
        path: ['permission']
      }
    ];
  }


}

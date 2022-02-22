import { Component, OnInit } from '@angular/core';
import { contentRoutes } from '@/layout/layout.routing';
export type SidebarRoutes = SidebarRoute[];
export interface SidebarRoute {
  path: string;
  label: string;
  isAbsoluteUrl?: boolean;
  isGroup?: boolean;
  child?: SidebarRoutes;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  layoutRoutes = contentRoutes;

  constructor() {
  }

  ngOnInit() {

  }


}

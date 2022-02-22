import { Component, OnInit, Input } from '@angular/core';
import { NavLinks } from '@/shared/models/navigation';

@Component({
  selector: 'app-nav-tab',
  templateUrl: './nav-tab.component.html',
  styleUrls: ['./nav-tab.component.scss']
})
export class NavTabComponent implements OnInit {
  @Input() navLinks: NavLinks;

  constructor() { }

  ngOnInit() {
  }

}

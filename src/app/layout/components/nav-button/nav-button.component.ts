import { Component, OnInit, Input, HostListener, ViewEncapsulation } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-nav-button',
  templateUrl: './nav-button.component.html',
  styleUrls: ['./nav-button.component.scss'],
  animations: [
    trigger('rotatedState', [
      state('default', style({ transform: 'rotate(0)' })),
      state('rotated', style({ transform: 'rotate(180deg)' })),
      transition('* => *', animate('100ms ease-out')),
    ])
  ]
})
export class NavButtonComponent implements OnInit {
  @Input() label: string;
  @Input() isGroup = false;
  state = 'default';

  constructor() { }

  ngOnInit() {
  }
  rotate() {
    this.state = (this.state === 'default' ? 'rotated' : 'default');
  }

}

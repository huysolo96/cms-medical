import { Component, OnInit } from '@angular/core';
import { NavLinks } from '@/shared/models/navigation';

@Component({
  selector: 'app-question-page',
  templateUrl: './question-page.component.html',
  styleUrls: ['./question-page.component.scss']
})
export class QuestionPageComponent implements OnInit {
  navLinks: NavLinks;
  constructor() {
    this.initNavLinks();
  }

  ngOnInit() {
  }

  initNavLinks() {
    this.navLinks = [
      {
        label: 'Danh sách câu hỏi',
        path: ['item']
      },
      {
        label: 'Danh mục câu hỏi',
        path: ['category']
      }
    ];
  }

}

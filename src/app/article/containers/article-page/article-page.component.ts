import { Component, OnInit } from '@angular/core';
import { NavLinks } from '@/shared/models/navigation';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.scss']
})
export class ArticlePageComponent implements OnInit {
  navLinks: NavLinks;
  constructor() {
    this.initNavLinks();
  }

  ngOnInit() {
  }

  initNavLinks() {
    this.navLinks = [
      {
        label: 'Danh sách bài viết',
        path: ['item']
      },
      {
        label: 'Danh mục bài viết',
        path: ['category']
      }
    ];
  }

}

import { Routes, RouterModule } from '@angular/router';
import { ArticleItemPageComponent, ArticlePageComponent } from './containers';
import { ArticleCategoryPageComponent } from './containers/article-category-page/article-category-page.component';

const routes: Routes = [
  {
    path: '',
    component: ArticlePageComponent,
    children: [
      {
        path: '',
        redirectTo: 'item'
      },
      {
        path: 'item',
        component: ArticleItemPageComponent,
        data: {
          breadcrumb: 'Danh sách bài viết',
        }
      },
      {
        path: 'category',
        component: ArticleCategoryPageComponent,
        data: {
          breadcrumb: 'Danh mục bài viết',
        }
      }
    ]
  },

];

export const ArticleRoutes = RouterModule.forChild(routes);

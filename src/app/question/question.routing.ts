import { Routes, RouterModule } from '@angular/router';
import { QuestionItemPageComponent, QuestionPageComponent } from './containers';
import { QuestionCategoryPageComponent } from './containers/question-category-page/question-category-page.component';

const routes: Routes = [
  {
    path: '',
    component: QuestionPageComponent,
    children: [
      {
        path: '',
        redirectTo: 'item'
      },
      {
        path: 'item',
        component: QuestionItemPageComponent,
        data: {
          breadcrumb: 'Danh sách câu hỏi',
        }
      },
      {
        path: 'category',
        component: QuestionCategoryPageComponent,
        data: {
          breadcrumb: 'Danh mục câu hỏi',
        }
      }
    ]
  },

];

export const QuestionRoutes = RouterModule.forChild(routes);

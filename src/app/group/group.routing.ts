import { Routes, RouterModule } from '@angular/router';
import { GroupItemPageComponent } from './containers';
import { GroupCategoryPageComponent } from './containers/group-category-page/group-category-page.component';
import { GroupPageComponent } from './containers/group-page/group-page.component';

const routes: Routes = [
  {
    path: '',
    component: GroupPageComponent,
    children: [
      {
        path: '',
        redirectTo: 'item'
      },
      {
        path: 'item',
        component: GroupItemPageComponent,
        data: {
          breadcrumb: 'Danh sách hội nhóm',
        }
      },
      {
        path: 'category',
        component: GroupCategoryPageComponent,
        data: {
          breadcrumb: 'Danh mục hội nhóm',
        }
      }
    ]
  },
];

export const GroupRoutes = RouterModule.forChild(routes);

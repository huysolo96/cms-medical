import { Routes, RouterModule } from '@angular/router';
import { DiseaseItemPageComponent, DiseasePageComponent } from './containers';
import { DiseaseCategoryPageComponent } from './containers/disease-category-page/disease-category-page.component';

const routes: Routes = [
  {
    path: '',
    component: DiseasePageComponent,
    children: [
      {
        path: '',
        redirectTo: 'item'
      },
      {
        path: 'item',
        component: DiseaseItemPageComponent,
        data: {
          breadcrumb: 'Danh sách bệnh',
        }
      },
      {
        path: 'category',
        component: DiseaseCategoryPageComponent,
        data: {
          breadcrumb: 'Danh mục bệnh',
        }
      }
    ]
  },

];

export const DiseaseRoutes = RouterModule.forChild(routes);

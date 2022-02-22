import { Routes, RouterModule } from '@angular/router';
import { MedicalPageComponent } from './containers';

const routes: Routes = [
  {
    path: '',
    component: MedicalPageComponent
  },
];

export const MedicalRoutes = RouterModule.forChild(routes);

import { Routes, RouterModule } from '@angular/router';
import { DashboardPageComponent } from './containers';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DashboardPageComponent
  },
];

export const DashboardRoutes = RouterModule.forChild(routes);

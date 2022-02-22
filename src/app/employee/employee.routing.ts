import { Routes, RouterModule } from '@angular/router';
import { EmployeePageComponent } from './containers';

const routes: Routes = [
  {
    path: '',
    component: EmployeePageComponent
  },
];

export const EmployeeRoutes = RouterModule.forChild(routes);

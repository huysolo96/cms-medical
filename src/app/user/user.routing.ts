import { Routes, RouterModule } from '@angular/router';
import { UserPageComponent } from './containers';

const routes: Routes = [
  {
    path: '',
    component: UserPageComponent
  },
];

export const UserRoutes = RouterModule.forChild(routes);

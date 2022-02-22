import { Routes, RouterModule } from '@angular/router';
import { AccountPageComponent } from './containers';

const routes: Routes = [
  {
    path: '',
    component: AccountPageComponent
  },
];

export const AccountRoutes = RouterModule.forChild(routes);

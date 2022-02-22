import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './containers';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LoginPageComponent
  },
];

export const LoginRoutes = RouterModule.forChild(routes);

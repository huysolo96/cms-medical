import { Routes, RouterModule } from '@angular/router';
import { RolePageComponent, RoleRoutingPageComponent, PermissionPageComponent } from './containers';

const routes: Routes = [
  {
    path: '',
    component: RoleRoutingPageComponent,
    children: [
      {
        path: '',
        redirectTo: 'role',
      },
      {
        path: 'role',
        component: RolePageComponent
      },
      {
        path: 'permission',
        component: PermissionPageComponent
      }
    ]
  },
];

export const RoleRoutes = RouterModule.forChild(routes);

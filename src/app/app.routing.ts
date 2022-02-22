import { Routes, RouterModule } from '@angular/router';
import { SessionGuard } from '@/core/guards';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'app'
  },
  {
    path: 'app',
    canActivate: [
      SessionGuard
    ],
    loadChildren: () => import('@/layout/layout.module').then(m => m.LayoutModule)
  },
  {
    path: 'login',
    loadChildren: () => import('@/login/login.module').then(m => m.LoginModule)
  },
];

export const AppRoutes = RouterModule.forRoot(routes);

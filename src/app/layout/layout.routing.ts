import { Routes, RouterModule } from '@angular/router';
import { LayoutPageComponent } from './containers';
export const contentRoutes: Routes = [

  // {
  //   path: 'dashboard',
  //   loadChildren: () => import('@/dashboard/dashboard.module').then(m => m.DashboardModule),
  //   data: {
  //     breadcrumb: 'Trang chủ',
  //     matIcon: 'dashboard'
  //   },
  // },
  // {
  //   path: 'employee',
  //   loadChildren: () => import('@/employee/employee.module').then(m => m.EmployeeModule),
  //   data: {
  //     breadcrumb: 'Nhân viên',
  //     matIcon: 'people'
  //   },
  // },
  // {
  //   path: 'medical',
  //   loadChildren: () => import('@/medical/medical.module').then(m => m.MedicalModule),
  //   data: {
  //     breadcrumb: 'Quản lý thuốc',
  //     matIcon: 'view_headline'
  //   },
  // },

  {
    path: 'account',
    loadChildren: () => import('@/account/account.module').then(m => m.AccountModule),
    data: {
      breadcrumb: 'Quản lý tài khoản',
      matIcon: 'person'
    },
  },
  {
    path: 'role',
    loadChildren: () => import('@/role/role.module').then(m => m.RoleModule),
    data: {
      breadcrumb: 'Phân quyền',
      matIcon: 'supervisor_account'
    },
  },
  {
    path: 'user',
    loadChildren: () => import('@/user/user.module').then(m => m.UserModule),
    data: {
      breadcrumb: 'Quản lý người dùng',
      matIcon: 'supervisor_account'
    },
  },

  {
    path: 'article',
    loadChildren: () => import('@/article/article.module').then(m => m.ArticleModule),
    data: {
      breadcrumb: 'Quản lý bài viết',
      matIcon: 'library_books'
    },
  },
  {
    path: 'medical',
    loadChildren: () => import('@/medical/medical.module').then(m => m.MedicalModule),
    data: {
      breadcrumb: 'Quản lý thuốc',
      matIcon: 'healing'
    },
  },
  {
    path: 'group',
    loadChildren: () => import('@/group/group.module').then(m => m.GroupModule),
    data: {
      breadcrumb: 'Quản lý hội nhóm',
      matIcon: 'group'
    },
  },
  {
    path: 'disease',
    loadChildren: () => import('@/disease/disease.module').then(m => m.DiseaseModule),
    data: {
      breadcrumb: 'Quản lý bệnh',
      matIcon: 'bug_report'
    },
  },
  {
    path: 'question',
    loadChildren: () => import('@/question/question.module').then(m => m.QuestionModule),
    data: {
      breadcrumb: 'Quản lý câu hỏi',
      matIcon: 'question_answer'
    },
  },


];

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      {
        path: '',
        redirectTo: 'account',
      },
      ...contentRoutes
    ]
  },
];

export const LayoutRoutes = RouterModule.forChild(routes);

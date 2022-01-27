export const childRoutes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./test-management/test-management.module').then(m => m.TestManagementModule),
    data: { icon: 'dashboard', text: 'Dashboard' }
  }
];

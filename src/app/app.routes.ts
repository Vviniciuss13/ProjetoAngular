import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'pagina1',
    loadComponent: () => import('./pagina1/pagina1.page').then( m => m.Pagina1Page)
  },
  {
    path: 'pagina2',
    loadComponent: () => import('./pagina2/pagina2.page').then( m => m.Pagina2Page)
  },
  {
    path: 'pagina3',
    loadComponent: () => import('./pagina3/pagina3.page').then( m => m.Pagina3Page)
  },
  {
    path: 'pagina4',
    loadComponent: () => import('./pagina4/pagina4.page').then( m => m.Pagina4Page)
  },
];

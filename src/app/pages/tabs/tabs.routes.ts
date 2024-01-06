import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { DespachadorComponent } from './despachador/despachador.component';

export const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadComponent: () => import('./despachador/despachador.component').then( m => m.DespachadorComponent)
        //loadComponent: () => import('./home/home.page').then( m => m.HomePage)
      },
      {
        path: 'users',
        loadComponent: () => import('./users/users.component').then( m => m.UsersComponent)
      },
      {
        path: 'travels',
        loadComponent: () => import('./travels/travels.component').then( m => m.TravelsComponent)
      },
      {
        path: 'mines',
        loadComponent: () => import('./mines/mines.component').then( m => m.MinesComponent)
      },
      {
        path: 'account',
        loadComponent: () => import('./account/account.page').then( m => m.AccountPage)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full',
  },

];

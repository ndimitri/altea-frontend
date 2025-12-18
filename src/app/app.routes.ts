// import { Routes } from '@angular/router';
//
// export const routes: Routes = [
//   {
//
//     path: '',
//     loadComponent: () =>
//       import('./home/home.component').then((m) => m.HomeComponent),
//     children: [
//       {
//         path: '',
//         redirectTo: 'dashboard',
//         pathMatch: 'full'
//       },
//       {
//         path: 'dashboard',
//         loadComponent: () =>
//           import('./dashboard/dashboard.component').then((m) => m.DashboardComponent),
//
//       },
//       {
//         path:'calendar',
//         loadComponent: () =>
//           import('./calendar/calendar.component').then((m) => m.CalendarComponent),
//       }
//     ]
//   }
//
//
//
// ];

import { Routes } from '@angular/router';

/**
 * @module app.routes
 * Configuration des routes de l'application Angular.
 *
 * @constant {Routes} routes - Liste des routes avec lazy loading des composants.
 */
export const routes: Routes = [
  {
    /**
     * Route racine.
     *
     * @property {string} path - Chemin de la route ('').
     * @property {() => Promise<any>} loadComponent - Charge paresseusement le HomeComponent.
     * @property {Array} children - Routes enfants déclarées sous la route racine.
     * @see ./home/home.component
     */
    path: '',
    loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent),
    children: [
      {
        /**
         * Redirection par défaut vers 'dashboard'.
         *
         * @property {string} path - Chemin vide correspondant à la racine enfant.
         * @property {string} redirectTo - Chemin de redirection ('dashboard').
         * @property {string} pathMatch - Mode de correspondance ('full').
         */
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        /**
         * Route 'dashboard'.
         *
         * @property {string} path - Chemin de la route ('dashboard').
         * @property {() => Promise<any>} loadComponent - Charge paresseusement le DashboardComponent.
         * @see ./dashboard/dashboard.component
         */
        path: 'dashboard',
        loadComponent: () =>
          import('./dashboard/dashboard.component').then((m) => m.DashboardComponent),

      },
      {
        /**
         * Route 'calendar'.
         *
         * @property {string} path - Chemin de la route ('calendar').
         * @property {() => Promise<any>} loadComponent - Charge paresseusement le CalendarComponent.
         * @see ./calendar/calendar.component
         */
        path:'calendar',
        loadComponent: () =>
          import('./calendar/calendar.component').then((m) => m.CalendarComponent),
      }
    ]
  }



];

import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/calendar',
        pathMatch: 'full'
    },
    {
        path: 'calendar',
        loadComponent: () => import('./feature/calendar/calendar.component').then(m => m.CalendarComponent)
    },
    {
        path: '**',
        redirectTo: '/'
    }
];

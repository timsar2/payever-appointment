import { Routes } from '@angular/router'
import { CalendarService } from './feature/calendar/calendar.service'

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/calendar',
    pathMatch: 'full'
  },
  {
    path: 'calendar',
    providers: [CalendarService],
    loadComponent: () => import('./feature/calendar/calendar.component').then(m => m.CalendarComponent)
  },
  {
    path: '**',
    redirectTo: '/'
  }
]

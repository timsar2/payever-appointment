import { Routes } from '@angular/router'
import { CalendarService } from './feature/calendar/calendar.service'
import { AuthGuard } from './shell/auth/auth.guard'

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('@app/shell/layout/layout.routes').then(m => m.routes)
  },
  {
    path: 'login',
    loadChildren: () => import('./feature/account/auth.routes').then(m => m.routes)
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
]

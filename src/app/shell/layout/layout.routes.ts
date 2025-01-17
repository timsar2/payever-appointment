import { Routes } from '@angular/router'
import { CalendarService } from '@app/feature/calendar/calendar.service'
import { AuthGuard } from '@app/shell/auth/auth.guard'
import { SidenavComponent } from './ui/sidenav/sidenav.component'
import { calendarResolver } from '@app/feature/calendar/calendar.resolver'

export const routes: Routes = [
  {
    path: '',
    component: SidenavComponent,
    children: [
      {
        path: '',
        title: 'Appointment Calendar',
        providers: [CalendarService],
        resolve: {
          appointments: calendarResolver
        },
        loadComponent: () => import('@app/feature/calendar/calendar.component').then(m => m.CalendarComponent)
      },
      {
        path: 'dashboard',
        title: 'Payever Dashboard',
        loadComponent: () => import('@app/feature/dashboard/dashboard.component').then(m => m.DashboardComponent),
        canMatch: [
          AuthGuard({
            isProtected: true
            // redirectTo: ['/login'],
          })
        ]
      },
      {
        path: 'change-log',
        title: 'Change Log',
        loadComponent: () => import('@app/feature/change-log/change-log.component').then(m => m.ChangelogComponent)
      }
    ]
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
]

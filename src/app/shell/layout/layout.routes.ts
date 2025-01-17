import { Routes } from '@angular/router'
import { CalendarService } from '@app/feature/calendar/calendar.service'
import { LayoutComponent } from '@app/shell/layout/layout.component'
import { AuthGuard } from '@app/shell/auth/auth.guard'

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        title: 'Appointment Calendar',
        providers: [CalendarService],
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
      }
    ]
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
]

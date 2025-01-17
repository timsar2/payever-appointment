import { Routes } from '@angular/router'

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadComponent: () => import('./login/login.component').then(m => m.LoginComponent)
      },
      {
        path: 'signup',
        loadComponent: () => import('./signup/signup.component').then(m => m.SignupComponent)
      }
    ]
  }
]

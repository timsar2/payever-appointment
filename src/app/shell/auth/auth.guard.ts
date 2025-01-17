import { inject } from '@angular/core'
import { CanMatchFn, Router } from '@angular/router'
import { AuthGaurdModel } from '@app/shell/auth/auth.model'
import { AuthService } from '@app/shell/auth/auth.service'

export function AuthGuard(data: AuthGaurdModel): CanMatchFn {
  return () => {
    const authService = inject(AuthService)
    const router = inject(Router)
    const isLoggedIn = authService.isAuthenticated()

    data.isProtected = data.isProtected !== undefined ? data.isProtected : true
    let hasAccess = data.isProtected ? isLoggedIn : false

    if (hasAccess) {
      router.createUrlTree(data.redirectTo ?? ['/login'])
      return true
    }

    return router.createUrlTree(data.redirectTo ?? ['/login'])
  }
}

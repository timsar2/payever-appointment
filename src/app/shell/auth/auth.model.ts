export interface AuthGaurdModel {
  redirectTo?: string[]
  isProtected?: boolean
}

export interface IAuth {
  user: string | undefined
  isAuthenticated: boolean
}

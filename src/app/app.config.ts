import { ApplicationConfig, inject, provideAppInitializer, provideZoneChangeDetection } from '@angular/core'
import { provideRouter } from '@angular/router'

import { routes } from './app.routes'
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'
import { provideHttpClient } from '@angular/common/http'
import { StorageService } from '@shared/services/storage.service'
import { AuthService } from '@app/shell/auth/auth.service'
import { initializeAppFactory } from './shell/config/initialize-app-factory'

export const appConfig: ApplicationConfig = {
  providers: [
    provideAppInitializer(() => initializeAppFactory(inject(StorageService), inject(AuthService))),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient()
  ]
}

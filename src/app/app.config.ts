import { ApplicationConfig, inject, Injectable, provideAppInitializer, provideZoneChangeDetection } from '@angular/core'
import { provideRouter, RouterStateSnapshot, TitleStrategy } from '@angular/router'

import { routes } from './app.routes'
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'
import { provideHttpClient } from '@angular/common/http'
import { StorageService } from '@shared/services/storage.service'
import { AuthService } from '@app/shell/auth/auth.service'
import { initializeAppFactory } from '@app/shell/config/initialize-app-factory'
import { HeaderService } from '@app/shell/services/header.service'
import { Title } from '@angular/platform-browser'

@Injectable({ providedIn: 'root' })
export class TemplatePageTitleStrategy extends TitleStrategy {
  #headerService = inject(HeaderService)
  #title = inject(Title)

  override updateTitle(routerState: RouterStateSnapshot) {
    const title = this.buildTitle(routerState)
    if (title !== undefined) {
      this.#title.setTitle(title)
      this.#headerService.setTitle(title)
    }
  }
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideAppInitializer(() => initializeAppFactory(inject(StorageService), inject(AuthService))),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    { provide: TitleStrategy, useClass: TemplatePageTitleStrategy },
    provideAnimationsAsync(),
    provideHttpClient()
  ]
}

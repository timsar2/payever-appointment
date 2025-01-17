import { inject, Injectable, signal } from '@angular/core'
import { Router } from '@angular/router'
import { StorageService } from '@app/shared/services/storage.service'
import { IAuth } from '@app/shell/auth/auth.model'
import { LOCAL_STORAGE_KEYS } from '@app/shared/models/local-storage-keys'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  #storageService = inject(StorageService)
  authSignal = signal<IAuth>({ isAuthenticated: false, user: undefined })
  #router = inject(Router)

  isAuthenticated(): boolean {
    return this.authSignal().isAuthenticated
  }

  async login(user: string) {
    this.authSignal.set({ isAuthenticated: true, user })
    await this.#storageService.set<IAuth>(LOCAL_STORAGE_KEYS.AUTH, { user, isAuthenticated: true })
  }

  async logout() {
    await this.#storageService.clear()

    this.#router
      .navigate(['/'], { replaceUrl: true })
      .then(() => this.authSignal.update(() => ({ isAuthenticated: false, user: undefined })))
  }
}

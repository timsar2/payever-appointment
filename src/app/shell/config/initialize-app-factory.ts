import { LOCAL_STORAGE_KEYS } from '@app/shared/models/local-storage-keys'
import { StorageService } from '@app/shared/services/storage.service'
import { IAuth } from '@app/shell/auth/auth.model'
import { AuthService } from '@app/shell/auth/auth.service'

export const initializeAppFactory = (storageService: StorageService, authService: AuthService): Promise<unknown> => {
  return new Promise<unknown>(async resolve => {
    const authReq = storageService.get<IAuth>(LOCAL_STORAGE_KEYS.AUTH)

    const result = await Promise.all([authReq])

    const auth = result[0]
    if (auth) {
      authService.authSignal.set(auth)
    }

    resolve(true)
  })
}

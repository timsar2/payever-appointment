import { Injectable } from '@angular/core'

import { LOCAL_STORAGE_KEYS } from '@app/shared/models/local-storage-keys'
const APP_PREFIX = 'PAY-EVER-'

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  set<T>(key: LOCAL_STORAGE_KEYS, value: T) {
    return localStorage.setItem(`${APP_PREFIX}${key}`, JSON.stringify(value) ?? value?.toString())
  }

  get<T>(key: LOCAL_STORAGE_KEYS) {
    const res = localStorage.getItem(`${APP_PREFIX}${key}`)

    return !res ? null : (JSON.parse(res ?? '') as T) ?? (res as unknown as T)
  }

  remove(key: LOCAL_STORAGE_KEYS): void {
    localStorage.removeItem(`${APP_PREFIX}${key}`)
  }

  clear() {
    localStorage.clear()
  }
}

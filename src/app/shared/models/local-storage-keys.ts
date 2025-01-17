export enum LOCAL_STORAGE_KEYS {
  AUTH = 'auth'
}

type StorageKeyType = {
  [key in LOCAL_STORAGE_KEYS]: string
}

export const StorageKey: StorageKeyType = {
  auth: 'auth'
}

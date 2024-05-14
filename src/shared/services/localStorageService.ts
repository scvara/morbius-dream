export enum LocalStorageKey {
  STAGE = 'stage',
}

export class LocalStorageService {
  getItem<T = string>(value: LocalStorageKey): T | null {
    const item = localStorage.getItem(value)
    if (item) {
      return JSON.parse(item) as T
    }
    return null
  }

  setItem<T>(value: LocalStorageKey, data: T): void {
    localStorage.setItem(value, JSON.stringify(data))
  }

  clear() {
    localStorage.clear()
  }
}

export const localStorageService = new LocalStorageService()

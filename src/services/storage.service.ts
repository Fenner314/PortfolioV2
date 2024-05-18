import { StorageKeys } from 'models/storage-keys.enum'

export class StorageService {
	get<T = any>(key: StorageKeys): T | null {
		const value = window.localStorage.getItem(key)

		if (!value) return null

		return JSON.parse(value) as T
	}

	set(key: StorageKeys, value: any): void {
		return window.localStorage.setItem(key, JSON.stringify(value))
	}

	delete(key: StorageKeys): void {
		return window.localStorage.removeItem(key)
	}
}

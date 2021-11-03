import { CryptoService } from './crypto.service'

function setItem(key, value) {
    const encryptKey = CryptoService.encryptKey(key)
    const encryptValue = CryptoService.encrypt(value)
    localStorage.setItem(encryptKey.toString(), encryptValue.toString())
}

function getItem(key) {
    const encryptedKey = CryptoService.encryptKey(key)
    return localStorage.getItem(encryptedKey.toString()) || ''
}

function logout() {
    localStorage.clear()
}

export const LocalStorageService = {
    setItem,
    getItem,
    logout
}


import * as CryptoJS from 'crypto-js'

const LS_SECRET_KEY = `${process.env.REACT_APP_LS_SECRET_KEY}`

function encryptKey(key) {
    return Buffer.from(key).toString('Base64')
}

function decryptKey(key) {
    return Buffer.from(key).toString('ascii')
}

/**
 * 
 * @param {*} value 
 * @returns 
 */
function encrypt(value) {
    const encrypted = CryptoJS.AES.encrypt(value, LS_SECRET_KEY)
    return encrypted.toString()
}

/**
 * @param {*} key 
 * @returns 
 */
function decrypt(key) {
    const decrypted = CryptoJS.AES.decrypt(key, LS_SECRET_KEY)
    return decrypted.toString(CryptoJS.enc.Utf8)
}

export const CryptoService = {
    encryptKey,
    decryptKey,
    encrypt,
    decrypt
}
import { Injectable } from '@angular/core';
import SimpleCrypto from "simple-crypto-js";
@Injectable({
    providedIn: 'root'
})
export class EncryptDecryptService {

    public secretKey = "F%&qw%&gjasdsHFY&^Rui";

    public setToLocalStorage(key, value) {
        var encryptedKey = window.btoa(key);
        var encryptedValue = this.encryptText(value);
        sessionStorage.setItem(encryptedKey, encryptedValue);
    }

    public getLocalStorage(key) {
        var encryptedKey = window.btoa(key);
        var localStorageEncryptedValue = sessionStorage.getItem(encryptedKey);
        var plainText = this.decryptText(localStorageEncryptedValue);
        return plainText;
    }

    public encryptText(plainText) {
        var simpleCrypto = new SimpleCrypto(this.secretKey);
        var chiperText = simpleCrypto.encrypt(plainText);
        return chiperText;
    }

    public decryptText(chiperText) {
        if(chiperText){
        var simpleCrypto = new SimpleCrypto(this.secretKey);
        var plainText = simpleCrypto.decrypt(chiperText);
        return plainText;
        }
       
    }

}
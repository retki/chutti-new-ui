import { Injectable } from '@angular/core';
import SimpleCrypto from "simple-crypto-js";
@Injectable({
    providedIn: 'root'
})
export class EncryptDecryptLocalStorageService {

    public secretKey = "F%&qw%&gjasdsHFY&^Rui";

    public setToLocalStorage(key, value) {
        
        var encryptedKey = window.btoa(key);
        var encryptedValue = this.encryptText(value);
        localStorage.setItem(encryptedKey, encryptedValue);
    }
    public setToLocalStorageForObjectTypes(key, value) {
        
        var encryptedKey = window.btoa(key);
        var encryptedValue = this.encryptObject(value);
        localStorage.setItem(encryptedKey, encryptedValue);
    }

    public getLocalStorage(key) {
        var encryptedKey = window.btoa(key);
        var localStorageEncryptedValue = localStorage.getItem(encryptedKey);
        var plainText:any="";
        if(localStorageEncryptedValue!=null && localStorageEncryptedValue!=undefined){
            plainText = this.decryptText(localStorageEncryptedValue);
        }
        return plainText;
    }
    public getLocalStorageForObjectTypes(key) {
        var encryptedKey = window.btoa(key);
        var localStorageEncryptedValue = localStorage.getItem(encryptedKey);
        var plainText:any="";
        if(localStorageEncryptedValue!=null && localStorageEncryptedValue!=undefined){
            plainText = this.decryptObject(localStorageEncryptedValue);
        }
        return plainText;
    }

    public encryptText(plainText) {
        var simpleCrypto = new SimpleCrypto(this.secretKey);
        var chiperText = simpleCrypto.encrypt(plainText);
        return chiperText;
    }
    public encryptObject(plainText) {
        var simpleCrypto = new SimpleCrypto(this.secretKey);
        var chiperText = simpleCrypto.encrypt(plainText);
        return chiperText;
    }

    public decryptText(chiperText) {
        var simpleCrypto = new SimpleCrypto(this.secretKey);
        var plainText = simpleCrypto.decrypt(chiperText);
        return plainText;
    }

    public decryptObject(chiperText) {
        var simpleCrypto = new SimpleCrypto(this.secretKey);
        var plainText = simpleCrypto.decrypt(chiperText , true);
        return plainText;
    }

}
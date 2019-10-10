import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { EncryptDecryptLocalStorageService } from '../services/encrypt-decrypt-localstorage.service';

@Injectable({ providedIn: 'root' })
export class ManagerAuthGuard implements CanActivate {
    constructor(public router: Router, private encryptdecryptlocalstorage: EncryptDecryptLocalStorageService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if( localStorage.getItem('token')){
            let currentlyLogedInReportingManager = this.encryptdecryptlocalstorage.getLocalStorage('employeeId')
            if (currentlyLogedInReportingManager != "" && currentlyLogedInReportingManager != undefined) {
                var url_string = window.location.href;
                var url = new URL(url_string);
                var reportingManagerId = url.href.includes("reportingManagerId") ? url_string.split('&')[1].split('=')[1] : undefined;
                if (reportingManagerId == undefined) {
                    return true;
                }
                else {
                    if (reportingManagerId == currentlyLogedInReportingManager) {
                        return true;
                    }
                }
    
            }
            this.router.navigate(['/notAuthorized']);
            return false;
        }
        this.router.navigate(['/signIn']);
        
    }
}
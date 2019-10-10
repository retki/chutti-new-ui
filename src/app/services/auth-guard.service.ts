import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(public router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let token = localStorage.getItem('token');
        if (token != "" && token != undefined) {
            return true;
        }

        this.router.navigate(['/signIn']);
        return false;
    }
}
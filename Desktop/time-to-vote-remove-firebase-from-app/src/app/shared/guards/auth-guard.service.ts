import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { RouterExtensions } from 'nativescript-angular';

@Injectable({
    providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

    constructor() {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return;
    }

}



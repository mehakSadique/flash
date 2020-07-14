import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { RouterExtensions } from 'nativescript-angular';

@Injectable()

export class InterceptorService implements HttpInterceptor {
    constructor(private router: RouterExtensions) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const headers = {};
        const userToken = 'token';
        headers['Content-Type'] = 'application/json; charset=UTF-8';
        if (userToken) {
            headers['Authorization'] = `${userToken}`;
        }
       
        return next.handle(request)
    }
}

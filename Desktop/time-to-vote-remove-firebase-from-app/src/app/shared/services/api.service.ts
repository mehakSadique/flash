import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { request } from 'tns-core-modules/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ApiService {
 

  constructor(
    private http: HttpClient,
  ) {}

  // getSomthing(params: type): Observable<any> { }
}


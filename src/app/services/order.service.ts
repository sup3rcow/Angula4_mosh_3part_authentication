import { Http, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class OrderService {

  /*
  constructor(private http: Http) {
  }

  getOrders() {
    let headers = new Headers();
    let token = localStorage.getItem('token');
    headers.append('Authorization', 'Bearer ' + token);

    let options = new RequestOptions({headers: headers}); // rucno moras importatiti Headers

    return this.http.get('/api/orders', options)
      .map(response => response.json());
  }*/

  // brzi nacin

  // AuthHttp zamijeni ovo iznad, a obican http koristimmo za sevise kojji ne trebaju authorizaciju

  // u app.module moras u providers dodati: AUTH_PROVIDERS,
  constructor(private authHttp: AuthHttp, private http: Http) { }

  getOrders() {
    return this.authHttp.get('/api/orders')
    .map(response => response.json());
  }
}

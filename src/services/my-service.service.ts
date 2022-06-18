import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class MyServiceService {
  constructor(private http: HttpClient) {}
  getData() {
    return this.http.get<any>('https://reqres.in/api/users?page=1');
  }
}

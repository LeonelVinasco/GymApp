import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:3001';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AdminQueriesService {

  constructor(private http: HttpClient) { }

  insertcity(city: string): Observable<any> {
    console.log(city, AUTH_API);
    return this.http.post("http://localhost:3001/api/insert-city", {
      city
    }, httpOptions);
  }
  
  getCities(): Observable<any> {
    return this.http.get("http://localhost:3001/api/cities",httpOptions);
  }

  getGyms(): Observable<any> {
    return this.http.get("http://localhost:3001/api/gyms",httpOptions);
  }

  insertgym(gym: string, city: string): Observable<any> {
    console.log(gym,city);
    return this.http.post("http://localhost:3001/api/insert-gym", {
      gym,
      city
    }, httpOptions);
  }

  listusers(id: string): Observable<any> {
    return this.http.post("http://localhost:3001/api/list-users", {
      id
    }, httpOptions);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http:api:3001';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    console.log(username, password, AUTH_API);
    return this.http.post("http://api:3001/api/auth/signin", {
      username,
      password
    }, httpOptions);
  }

  register(username: string, email: string, password: string, gym: number): Observable<any> {
    return this.http.post("http://api:3001/api/auth/signup", {
      username,
      email,
      password,
      gym
    }, httpOptions);
  }

  getGyms(): Observable<any> {
    return this.http.get("http://api:3001/api/gyms",httpOptions);
  }

}

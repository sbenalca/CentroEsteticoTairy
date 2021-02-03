import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CookieService } from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient,private cookies: CookieService) { }

  login(user): Observable<any> {
    return this.http.post("http://localhost:3000/login", user);
  }

  setToken(token) {
    this.cookies.set("token", token);
  }

  getToken() {
    return this.cookies.get("token");
  }

  deleteToken(){
    this.cookies.delete("token");
  }

}

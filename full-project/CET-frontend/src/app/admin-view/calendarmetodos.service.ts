import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CalendarmetodosService {

  private URL = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }

  enviar(user){
    return this.http.post(this.URL+"pruebaBase",user);
  }
  getservicios(): Observable<any> {
    return this.http.get("http://localhost:3000/servicios");
  }
}

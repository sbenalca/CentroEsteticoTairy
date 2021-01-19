import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InformacionService {

  constructor(private http: HttpClient) { }

  getComentarios(): Observable<any> {
    return this.http.get("http://localhost:3000/comentarios");
  }

  getTratamientos(): Observable<any> {
    return this.http.get("http://localhost:3000/tratamientos");
  }

  getIntegrantes(): Observable<any> {
    return this.http.get("http://localhost:3000/integrantes");
  }
}

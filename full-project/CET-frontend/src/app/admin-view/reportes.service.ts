import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReportesService {

  constructor(private http: HttpClient) { }


  getUsuario(usuario) : Observable<any>{
    let url = "http://localhost:3000/personas/searchUsuario?id="+usuario
    return this.http.get(url);
  }


  getComentarios(): Observable<any> {
    return this.http.get("http://localhost:3000/comentarios");
  }


}

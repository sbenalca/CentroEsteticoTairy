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

  getUsuario(usuario) : Observable<any>{
    let url = "http://localhost:3000/personas/searchUsuario?id="+usuario
    return this.http.get(url);
  }

  getIntegrantes(): Observable<any> {
    return this.http.get("http://localhost:3000/personas/empleados");
  }

  getPersona(id):Observable<any> {
    let url = "http://localhost:3000/personas/search?id="+id
    return this.http.get(url);
  }

  getArea(id):Observable<any> {
    let url = "http://localhost:3000/areas/search?id="+id
    return this.http.get(url);
  }

  getTipo(id):Observable<any> {
    let url = "http://localhost:3000/tiposervicios/search?id="+id
    return this.http.get(url);
  }

  getTratamientos(): Observable<any> {
    return this.http.get("http://localhost:3000/servicios");
  }

<<<<<<< HEAD
=======

>>>>>>> 0d1aa67daece6c7ff2a22793ef96c00f7f966db9
}

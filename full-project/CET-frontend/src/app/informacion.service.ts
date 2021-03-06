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

  getPromociones(): Observable<any> {
    return this.http.get("http://localhost:3000/promociones");
  }

  getEstadisticasPromociones(): Observable<any> {
    return this.http.get("http://localhost:3000/promociones/estadisticas");
  }

  getUsuario(usuario) : Observable<any>{
    let url = "http://localhost:3000/personas/searchUsuario?id="+usuario
    return this.http.get(url);
  }

  getUsuarios() : Observable<any>{
    return this.http.get("http://localhost:3000/personas/usuarios");
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

  getEstaditicasCitas(): Observable<any> {
    return this.http.get("http://localhost:3000/citas/estadisticas");
  }

  getEstadisticas(): Observable<any> {
    return this.http.get("http://localhost:3000/estadisticas");
  }

  postContactanos(form): Observable<any> {
    return this.http.post("http://localhost:3000/contactanos/email",form);
  }

  postNuevoUsuario(form): Observable<any> {
    return this.http.post("http://localhost:3000/personas/",form);
  }

  putUsuario(form): Observable<any> {
    return this.http.put("http://localhost:3000/personas/",form);
  }

  delUsuario(form): Observable<any> {
    return this.http.delete("http://localhost:3000/personas/",form);
  }

}

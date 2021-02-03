import { Component, OnInit, ViewChild, Renderer2 } from '@angular/core';
import { InformacionService } from '../../informacion.service';
import { forkJoin } from 'rxjs';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})

export class UsuariosComponent implements OnInit {
  @ViewChild("formLayout") myForm: ElementRef;
  visibility = false;
  empleados;
  integrantes;
  areas;
  form = {
    idempleado:"",
    nombre:"",
    apellido:"",
    direccion:"",
    correo:"",
    telefono: ""
  };

  constructor(private informacionService: InformacionService, private renderer: Renderer2) {}

  getUsuarios(): void{
    const observablesListPersonas = [];
    const observablesListAreas = [];
    this.informacionService.getIntegrantes().subscribe((data: any)=>{
      this.empleados=data;
      this.empleados.forEach(em => {
        observablesListPersonas.push(this.informacionService.getPersona(em.idpersona));
        observablesListAreas.push(this.informacionService.getArea(em.idarea));
      });
      forkJoin(observablesListPersonas).subscribe((data:any) => {
        this.integrantes=data;
      });
      forkJoin(observablesListAreas).subscribe((data:any) => {
        this.areas=data;
      });
    });
  }

  trackByOption(index, option) {
    return option;
  }

  ngOnInit() {
    this.getUsuarios();
  }

  enviar(){
    this.visibility = false;
    this.informacionService.postNuevoUsuario(this.form).subscribe((data: any)=>{})
  }

  actualizar(){
    this.visibility = true;
    this.informacionService.putUsuario(this.form).subscribe((data: any)=>{})
  }


  eliminar(){
    this.visibility = false;
    this.informacionService.delUsuario(this.form).subscribe((data: any)=>{})
  }


  enable(){
    this.visibility = true;
   }

}

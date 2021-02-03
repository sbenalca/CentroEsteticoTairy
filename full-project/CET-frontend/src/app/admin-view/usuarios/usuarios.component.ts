import { Component, OnInit } from '@angular/core';
import { InformacionService } from '../../informacion.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})

export class UsuariosComponent implements OnInit {
  empleados;
  integrantes;
  areas;

  constructor(private informacionService: InformacionService) {}

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

}

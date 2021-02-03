import { Component, OnInit } from '@angular/core';
import { InformacionService } from '../informacion.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent implements OnInit {
  empleados;
  integrantes;
  areas;

  constructor(private informacionService: InformacionService) {}

  ngOnInit(): void {
    this.getIntegrantes();
  }

  getIntegrantes(): void{
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

}
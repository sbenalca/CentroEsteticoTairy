import { Component, OnInit } from '@angular/core';
import { countReset } from 'console';
import { InformacionService } from '../../informacion.service';

@Component({
  selector: 'app-estadistica',
  templateUrl: './estadistica.component.html',
  styleUrls: ['./estadistica.component.css']
})
export class EstadisticaComponent implements OnInit {
  clientes;
  empleados;
  servicios;

  constructor(private informacionService: InformacionService) { }

  getNServicios(): void{
    this.informacionService.getTratamientos().subscribe((data: any)=>{
      this.servicios=data.length;
    })
  }

  getNEmpleados(): void{
    this.informacionService.getIntegrantes().subscribe((data: any)=>{
      this.empleados=data.length;
    })
  }

  getNClientes(): void{
    this.informacionService.getUsuarios().subscribe((data: any)=>{
      this.clientes=data.length;
    })
  }

  ngOnInit(): void {
    this.getNServicios();
    this.getNEmpleados();
    this.getNClientes();
  }

}

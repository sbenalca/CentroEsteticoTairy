import { Component, OnInit } from '@angular/core';
import { InformacionService } from '../informacion.service';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent implements OnInit {
  integrantes;

  constructor(private informacionService: InformacionService) {}


  ngOnInit(): void {
    this.getIntegrantes();
  }

  getIntegrantes(): void{
    this.informacionService.getIntegrantes().subscribe((data: any)=>{
      this.integrantes=data;
      console.log(this.integrantes);
    });
  }

}

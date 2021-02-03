import { Component, OnInit } from '@angular/core';
import { InformacionService } from '../informacion.service';

@Component({
  selector: 'app-promociones',
  templateUrl: './promociones.component.html',
  styleUrls: ['./promociones.component.css']
})
export class PromocionesComponent implements OnInit {
  promociones;
  active;


  constructor(private informacionService: InformacionService) { }

  getPromociones(): void{
    const observablesList = [];
    this.informacionService.getPromociones().subscribe((data: any)=>{
      this.promociones=data;
      this.active = this.promociones.shift();
    })
  }

  ngOnInit() {
    this.getPromociones();
  }

}

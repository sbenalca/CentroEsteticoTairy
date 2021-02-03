import { Component, OnInit } from '@angular/core';
import { InformacionService } from '../informacion.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  form = {
    nombre:"",
    fecha:"",
    ciudad:"",
    correo:"",
    mensaje: ""
  }

  constructor(private informacionService: InformacionService) { }

  ngOnInit() {
  }

  enviar(){
    this.informacionService.postContactanos(this.form).subscribe((data: any)=>{
    })

  }

}

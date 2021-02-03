import { ElementSchemaRegistry } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { InformacionService } from '../informacion.service';
const introJs = require("intro.js");
import { forkJoin } from 'rxjs';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

export class IndexComponent implements OnInit {
  comentarios;
  usuarios;
  active;
  introJS = introJs();

  constructor(private informacionService: InformacionService) {
    this.introJS.setOptions({
      steps: [
        {
          intro: "Bienvenido a nuestra pagina!! Comencemos con el recorrido"
        },
        {
          element: '.info-bienvenida',
          intro: "Somos una empresa dedicada a tu bienestar",
        },
        {
          element: '.servicios-img',
          intro: "Aqui podemos ver el top de servicios que ofrecemos"
        },
        {
          element: '#comentarios-carousel',
          intro: 'Carrusel de comentarios de nuestros clientes'
        },
        {
          element: '.mapa',
          intro: "Podemos ver la ubicacion de nuestro local, Te esperamos!!"
        }
      ]
    });
  }

  getComentarios(): void{
    const observablesList = [];
    this.informacionService.getComentarios().subscribe((data: any)=>{
      this.comentarios=data;
      this.comentarios.forEach(com => {
        observablesList.push(this.informacionService.getUsuario(com.id_usuario));
      });
      this.active = this.comentarios.shift();
      forkJoin(observablesList).subscribe((data:any) => {
        this.usuarios=data;
      });
    })
  }

<<<<<<< HEAD
=======
  trackByOption(index, option) {
    return option;
  } 

>>>>>>> 0d1aa67daece6c7ff2a22793ef96c00f7f966db9
  ngOnInit(): void {
    this.getComentarios();
    this.introJS.start();
  }

}
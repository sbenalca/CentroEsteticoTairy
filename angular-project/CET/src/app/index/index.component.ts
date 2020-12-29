import { Component, OnInit } from '@angular/core';
//import * as introJs from 'intro.js/intro.js';
const introJs = require("intro.js");


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  //comentarios=[];
  introJS = introJs();

  
  constructor() { 
    /*fetch("http://localhost:3000/comments")
    .then(res => res.json())
    .then(obj => (this.comentarios=obj))
    .catch(err => console.log(err));
  */
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

  ngOnInit(): void {
    this.introJS.start();
  }

}

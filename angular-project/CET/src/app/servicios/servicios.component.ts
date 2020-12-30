import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {
  servicios;

  mostrar(){
    let boton = document.getElementById("ver-mas");
    if(boton!=null){
      boton.style.display="none";
    }
    let serv = document.getElementsByClassName("servicio");
    for ( let i=0;  i<serv.length; i++){
      let item= serv.item(i);
      if (item!=null){
        item.setAttribute("class","servicio col-lg-2");
      }
    }
  }

  filtrarCat(){
    let categorias = document.getElementsByClassName("categoria");
    for ( let i=0;  i<categorias.length; i++){
        categorias[i].addEventListener('click', function (clickeado){
          let id = clickeado.path[1].getAttribute("id").toUpperCase()

          let datos = document.getElementsByClassName("servicio");
      
          for (let i = 0; i < datos.length; i++) {
              let compare = datos[i].getElementsByClassName("categoria")[0].innerText;
              if (compare!= id){
                  datos[i].style.display="none";
              }else {
                  datos[i].style.display="";
              }
          }
        })
    }
  }

  filtrarNom(){
    let input = document.getElementById("inputServicio");
    if(input!=null){
      input.addEventListener("keyup", function (){
        let valor = input.value;
        console.log(valor)
        let dato = document.getElementsByClassName("servicio");

        for (let i = 0; i < dato.length; i++) {
            let compare = dato[i].getElementsByTagName("h2")[0].innerText
            console.log(compare)
            if (compare.indexOf(valor)<0){
                dato[i].style.display="none";
            }else {
                dato[i].style.display="";
            }
        } 
        })
    }
  }

  constructor() { 
    this.servicios=require("src/assets/tratamientos.json");
  }

  ngOnInit(): void {
    this.filtrarCat();
    this.filtrarNom();
  }

}

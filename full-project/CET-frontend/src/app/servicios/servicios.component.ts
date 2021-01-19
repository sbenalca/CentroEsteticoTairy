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

  filtrarNom(){
    let input = document.getElementById("inputServicio");
      input?.addEventListener("keyup", function (){
        let boton = document.getElementById("ver-mas");
        if(boton!=null){
          boton.style.display="none";
        }
        let valor = (<HTMLInputElement>input)?.value;
        let dato = document.getElementsByClassName("servicio");
        for (let i = 0; i < dato.length; i++) {
            let compare = dato[i].getElementsByTagName("h2")[0].innerText
            if (compare.indexOf(valor)<0){
              dato.item(i)?.setAttribute("class","servicio col-lg-2 ocultar");
            } else {
              dato.item(i)?.setAttribute("class","servicio filtrar col-lg-2");
            }

            if (valor==""){
              if(boton!=null){
                boton.style.display="";
              }
            }
        }
      })
    
  }

  constructor() { 
    this.servicios=require("src/assets/tratamientos.json");
  }

  ngOnInit(): void {
    this.filtrarNom();
  }

}

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  bandera;
  openNav() {
    let contenedor = document.getElementById("sidebar-container");
    if (contenedor != null) {
      contenedor.style.width = "250px";
    }

    let estatico = document.getElementById("estatico");
    if (estatico != null) { estatico.style.width = "80%"; }
    let datos = document.querySelectorAll(".menu > a");
    datos.forEach(element => {
      element.classList.remove("tamanio");
    });
  }

  closeNav() {
    let contenerdor = document.getElementById("sidebar-container");
    if (contenerdor != null) {
      contenerdor.style.width = "50px";
    }
    let estatico = document.getElementById("estatico");
    if (estatico != null) {
      estatico.style.width = "90%";
    }
    let datos = document.querySelectorAll(".menu > a");
    datos.forEach(element => {
      element.classList.add("tamanio");
    });
  }

  myClick(){
    if (this.bandera) {
      this.closeNav();
      this.bandera = false;
    } else {
      this.openNav();
      this.bandera = true;
    }

  }
  constructor() {
    this.bandera = false;
  }

  ngOnInit(): void {

  }

}

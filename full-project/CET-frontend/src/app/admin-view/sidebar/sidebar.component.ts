import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

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

  myClick() {
    if (this.bandera) {
      this.closeNav();
      this.bandera = false;
    } else {
      this.openNav();
      this.bandera = true;
    }
  }

  constructor() {
    this.bandera = true;
  }

  ngOnInit(): void {
  }

}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ContactoComponent } from './contacto/contacto.component';
import { EquipoComponent } from './equipo/equipo.component';
import { PromocionesComponent } from './promociones/promociones.component';
import { ServiciosComponent } from './servicios/servicios.component';

const routes: Routes = [
  { path: "", component: IndexComponent },
  { path: "contacto", component: ContactoComponent },
  { path: "equipo", component: EquipoComponent },
  { path: "promociones", component: PromocionesComponent },
  { path: "servicios", component: ServiciosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

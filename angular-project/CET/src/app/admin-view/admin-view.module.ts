import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IonicModule } from '@ionic/angular';
import { EstadisticaComponent } from './estadistica/estadistica.component';
import { AppRoutingModule } from '../app-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarAdminComponent } from './navbar-admin/navbar-admin.component';
import { CalendarioComponent } from './calendario/calendario.component';




@NgModule({
  declarations: [DashboardComponent, EstadisticaComponent, SidebarComponent, NavbarAdminComponent, CalendarioComponent],
  imports: [
    BrowserModule,
    CommonModule,
    IonicModule,
    AppRoutingModule
  ]
})
export class AdminViewModule { }

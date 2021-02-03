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
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import { PruebaComponent } from './prueba/prueba.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {CalendarmetodosService} from './calendarmetodos.service';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ServiceDashComponent } from './serviceDash/serviceDash.component';
import { BarComponent } from './bar/bar.component';
import { PieComponent } from './pie/pie.component'; // a plugin
FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin,
  timeGridPlugin,
  listPlugin
]);

@NgModule({
  declarations: [DashboardComponent, EstadisticaComponent, SidebarComponent, NavbarAdminComponent, CalendarioComponent, PruebaComponent, UsuariosComponent, ServiceDashComponent,BarComponent,PieComponent],
  imports: [
    BrowserModule,
    CommonModule,
    IonicModule,
    AppRoutingModule,
    FullCalendarModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminViewModule { }

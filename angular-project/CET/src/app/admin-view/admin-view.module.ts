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

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin,
  timeGridPlugin,
  listPlugin
]);

@NgModule({
  declarations: [DashboardComponent, EstadisticaComponent, SidebarComponent, NavbarAdminComponent, CalendarioComponent],
  imports: [
    BrowserModule,
    CommonModule,
    IonicModule,
    AppRoutingModule,
    FullCalendarModule
  ]
})
export class AdminViewModule { }

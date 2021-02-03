import { Component, OnInit } from '@angular/core';
import { CalendarOptions, DateSelectArg, EventClickArg, EventApi } from '@fullcalendar/angular';
import { INITIAL_EVENTS, createEventId } from './event-utils';
import {CalendarmetodosService} from '../calendarmetodos.service';

import esLocale from '@fullcalendar/core/locales/es';
@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit {
  user = {
    nombre: "",
    descripcion: ""
  }
  servicios;
  calendarVisible = true;
  calendarOptions: CalendarOptions = {
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',

    },
    locale: esLocale,
    initialView: 'dayGridMonth',
    initialEvents: INITIAL_EVENTS, // alternatively, use the `events` setting to fetch from a feed
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    select: this.handleDateSelect.bind(this),
    eventClick: this.handleEventClick.bind(this),
    eventsSet: this.handleEvents.bind(this)
    /* you can update a remote database when these fire:
    eventAdd:
    eventChange:
    eventRemove:
    */
  };
  currentEvents: EventApi[] = [];

  handleCalendarToggle() {
    this.calendarVisible = !this.calendarVisible;
  }

  handleWeekendsToggle() {
    const { calendarOptions } = this;
    calendarOptions.weekends = !calendarOptions.weekends;
  }

  handleDateSelect(selectInfo: DateSelectArg) {
    ($("#agendaModal") as any).modal('show');
    //$("#agendaModal").modal();
    /* const title = prompt('Please enter a new title for your event');

    const calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      });
    } */
  }

  handleEventClick(clickInfo: EventClickArg) {
    if (confirm(`Deseas eliminar esta cita '${clickInfo.event.title}'`)) {
      clickInfo.event.remove();
    }
  }

  handleEvents(events: EventApi[]) {
    this.currentEvents = events;
  }

  constructor(private calendarmetodosService: CalendarmetodosService) { }

  ngOnInit(): void {
    this.getservicios();
    console.log(this.user);
    console.log(this.servicios);
  }

  getservicios(): void{
    this.calendarmetodosService.getservicios().subscribe((data: any)=>{
      this.servicios=data;
    });
  }

  enviar(){
    this.calendarmetodosService.enviar(this.user)
    .subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }

    );
    ($("#agendaModal") as any).modal('hide');
  }

}

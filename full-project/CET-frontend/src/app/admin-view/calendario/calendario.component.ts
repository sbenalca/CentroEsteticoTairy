import { Component, AfterViewChecked, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CalendarOptions, DateSelectArg, EventClickArg, EventApi } from '@fullcalendar/angular';
import { INITIAL_EVENTS, createEventId } from './event-utils';
import {CalendarmetodosService} from '../calendarmetodos.service';
import { EventInput ,Calendar} from '@fullcalendar/angular';
import esLocale from '@fullcalendar/core/locales/es';
import { FullCalendarComponent } from '@fullcalendar/angular';
declare var jQuery :any;

const TODAY_STR = new Date().toISOString().replace(/T.*$/, ''); // YYYY-MM-DD of today

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit , AfterViewChecked{
  eventos : EventInput[]= []
  user = {
    nombre: "",
    apellido: "",
    fechahora: "",
    fechadia: "",
    direccion: "",
    telefono: "",
    correo: "",
    servicio: 0,
  }
  calendarApi: Calendar;
  initialized = false;
  ngAfterViewChecked() {
    this.calendarApi = this.calendarComponent.getApi();
    if (this.calendarApi && !this.initialized) {
      this.initialized = true;
      this.getevents();
      console.log(this.eventos);
      this.loadEvents();
    }
  }
  even: any = [
    {
      title: "test1",
      start: Date.now(),
      allDay: true
    },
    { title: "test2", start: Date.now(), allDay: true }
  ];
  loadEvents() {
    var lista = this.getevents();
    const event = {
      title: "test",
      start: Date.now(),
      allDay: true
    };
    console.log(lista);
    this.eventos.push(event);
    this.calendarApi.removeAllEventSources();
    this.calendarApi.addEventSource(this.eventos);
  }
  servicios;
  calendarVisible = true;
  @ViewChild('fullcalendar') calendarComponent: FullCalendarComponent;
  constructor(private calendarmetodosService: CalendarmetodosService) { }


  ngOnInit(): void {

    this.calendarOptions = {
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
      events: INITIAL_EVENTS,
      select: this.handleDateSelect.bind(this),
      eventClick: this.handleEventClick.bind(this),
      eventsSet: this.handleEvents.bind(this)
      /* you can update a remote database when these fire:
      eventAdd:
      eventChange:
      eventRemove:
      */
    };
    this.getservicios();
  }
  calendarOptions: CalendarOptions;
  currentEvents: EventApi[] = [];

  handleCalendarToggle() {
    this.calendarVisible = !this.calendarVisible;
  }

  handleWeekendsToggle() {
    const { calendarOptions } = this;
    calendarOptions.weekends = !calendarOptions.weekends;
  }

  handleDateSelect(selectInfo: DateSelectArg) {
    this.user.fechadia = selectInfo.startStr;
    ($("#agendaModal") as any).modal('show');

  }

  handleEventClick(clickInfo: EventClickArg) {
    if (confirm(`Deseas eliminar esta cita '${clickInfo.event.title}'`)) {
      clickInfo.event.remove();
    }
  }

  handleEvents(events: EventApi[]) {
    this.currentEvents = events;
  }



  getservicios(): void{
    this.calendarmetodosService.getservicios().subscribe((data: any)=>{
      this.servicios=data;
    });
  }

  getevents(): void{
    this.calendarmetodosService.getevents().subscribe((data: any)=>{
      let lista = []
      for(let d of data){
        const cita ={
          id: String(d.idcita),
          title: "Facial",
          allDay: true

        }
        this.eventos.push(cita);
      }
      //(<HTMLElement>document.getElementById("calendar")).fullCalendar('renderEvents', this.eventos, true);

    });
  }

  enviar(){
    this.calendarmetodosService.enviar(this.user)
    .subscribe(
      res => {
        this.user.servicio = parseInt((<HTMLSelectElement>document.getElementById("selector")).value,10);
        console.log(this.user);
      },
      err => {
        console.log(err);
      }

    );
    ($("#agendaModal") as any).modal('hide');
  }

}

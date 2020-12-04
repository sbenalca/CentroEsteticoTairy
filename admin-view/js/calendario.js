//genera calendario
document.addEventListener("DOMContentLoaded", function () {
  var initialLocaleCode = "es";
  var localeSelectorEl = document.getElementById("locale-selector");
  var calendarEl = document.getElementById("calendar");

  const calendar = new FullCalendar.Calendar(calendarEl, {
    headerToolbar: {
      left: "prev,next today",
      center: "title",
      right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
    },
    selectable: true,
    locale: initialLocaleCode,
    buttonIcons: false,
    weekNumbers: true,
    navLinks: true,
    editable: true,
    dayMaxEvents: true,
    events: [
      {
        title: "Perez",
        description: "Lorem ipsum 1...",
        start: "2020" + "-" + "12" + "-01",
        color: "#3A87AD",
        textColor: "#ffffff",
      },
      {
        title: "Suarez",
        description: "Lorem ipsum 2...",
        start: "2020" + "-" + "12" + "-07",
        end: "2020" + "-" + "12" + "-10",
        color: "#3A87AD",
        textColor: "#ffffff",
      },
      {
        title: "Juan",
        description: "Lorem ipsum 3...",
        start: "2020" + "-" + "12" + "-09T16:00:00",
        color: "#3A87AD",
        textColor: "#ffffff",
      },
      {
        title: "Juan",
        description: "Lorem ipsum 4...",
        start: "2020" + "-" + "12" + "-16T16:00:00",
        color: "#3A87AD",
        textColor: "#ffffff",
      },
      {
        title: "Rosa",
        description: "Lorem ipsum 5...",
        start: "2020" + "-" + "12" + "-11",
        end: "2020" + "-" + "12" + "-13",
        color: "#3A87AD",
        textColor: "#ffffff",
      },
      {
        title: "Jose",
        description: "Lorem ipsum 6...",
        start: "2020" + "-" + "12" + "-12T10:30:00",
        end: "2020" + "-" + "12" + "-12T12:30:00",
        color: "#3A87AD",
        textColor: "#ffffff",
      },
      {
        title: "Pedro",
        description: "Lorem ipsum 7...",
        start: "2020" + "-" + "12" + "-12T12:00:00",
        color: "#3A87AD",
        textColor: "#ffffff",
      },
      {
        title: "Meeting",
        description: "Lorem ipsum 8...",
        start: "2020" + "-" + "12" + "-12T14:30:00",
        color: "#3A87AD",
        textColor: "#ffffff",
      },
      {
        title: "Carla",
        description: "Lorem ipsum 9...",
        start: "2020" + "-" + "12" + "-12T17:30:00",
        color: "#3A87AD",
        textColor: "#ffffff",
      },
      {
        title: "Ericka",
        description: "Lorem ipsum 10...",
        start: "2020" + "-" + "12" + "-12T20:00:00",
        color: "#3A87AD",
        textColor: "#ffffff",
      },
      {
        title: "David",
        description: "Lorem ipsum 11...",
        start: "2020" + "-" + "12" + "-13T07:00:00",
        color: "#3A87AD",
        textColor: "#ffffff",
      },
      {
        title: "Julisa",
        description: "Lorem ipsum 12...",
        url: "",
        start: "2020" + "-" + "12" + "-28",
        color: "#3A87AD",
        textColor: "#ffffff",
      },
    ],
    dateClick: function (date) {
      //alert('Has hecho click en :'+ date.dateStr);
      fecha = date.dateStr.split("T");
      console.log(fecha);
      let titulo = $("#date")[0];
      titulo.textContent = "Fecha: " + fecha[0];
      $("#agendaModal").modal();
      boton = document.getElementById("guardar");
      let datosagendar = document.forms["datos-agendar"];
      if (fecha.length > 1) {
        datosagendar["inicio"].value = fecha[1].split("-")[0];
        datosagendar["fin"].value = fecha[1].split("-")[0];
      }
      boton.addEventListener("click", function () {
        inicio = date.dateStr + "T" + datosagendar["inicio"].value;
        fin = date.dateStr + "T" + datosagendar["fin"].value;
        evento = {
          title: datosagendar["nombre"].value,
          description: datosagendar["servicio"].value,
          start: inicio,
          end: fin,
          color: "#3A87AD",
          textColor: "#ffffff",
        };
        calendar.addEvent(evento);
      });
    },
    select: function (info) {
      /* console.log(info)
      console.log("seleccionado " + info.startStr + " a " + info.endStr); */
    },
  });
  calendar.render();
});

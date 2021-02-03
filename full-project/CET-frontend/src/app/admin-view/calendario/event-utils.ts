import { EventInput } from '@fullcalendar/angular';

let eventGuid = 0;
const TODAY_STR = new Date().toISOString().replace(/T.*$/, ''); // YYYY-MM-DD of today

export let INITIAL_EVENTS: EventInput[] = [
  {
    id: "0",
    title: 'Baño Cajon',
    start: TODAY_STR
  },
  {
    id: "11",
    title: 'Facial',
    start: TODAY_STR + 'T12:00:00'
  }
];

export function createEventId() {
  return String(eventGuid++);
}

import { TestBed } from '@angular/core/testing';

import { CalendarmetodosService } from './calendarmetodos.service';

describe('CalendarmetodosService', () => {
  let service: CalendarmetodosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalendarmetodosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

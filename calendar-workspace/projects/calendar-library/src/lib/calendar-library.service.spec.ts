import { TestBed } from '@angular/core/testing';

import { CalendarLibraryService } from './calendar-library.service';

describe('CalendarLibraryService', () => {
  let service: CalendarLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalendarLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarLibraryComponent } from './calendar-library.component';

describe('CalendarLibraryComponent', () => {
  let component: CalendarLibraryComponent;
  let fixture: ComponentFixture<CalendarLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarLibraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

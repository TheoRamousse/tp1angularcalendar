import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalendarLibraryService } from './calendar-library.service';
import { CalendarEvent } from './model/calendar-event';

@Component({
  selector: 'lib-calendar-library',
  templateUrl: './calendar-library.component.html',
  styleUrls: ['./calendar-library.component.scss'],
  providers: [CalendarLibraryService]
})
export class CalendarLibraryComponent implements OnInit {
  public days: number[][] = [];
  private service: CalendarLibraryService
  private daysOrdered: string[] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  public months: { name: string, value: number }[] = [
    { name: 'January', value: 1 },
    { name: 'February', value: 2 },
    { name: 'March', value: 3 },
    { name: 'April', value: 4 },
    { name: 'May', value: 5 },
    { name: 'June', value: 6 },
    { name: 'July', value: 7 },
    { name: 'August', value: 8 },
    { name: 'September', value: 9 },
    { name: 'October', value: 10 },
    { name: 'November', value: 11 },
    { name: 'December', value: 12 }
  ];

  public year: number = 0
  public month: number = 0
  private startDay = 0

  @Input() defaultStartMonth: string = "";
  @Input() defaultStartYear: string = "";
  @Input() firstDayOfWeek: string = "";
  @Input() listOfEvents: CalendarEvent[] = [];


  constructor(service: CalendarLibraryService) {
    this.service = service;
  }

  ngOnInit(): void {
    const currentDate = new Date();
    if (this.firstDayOfWeek.length > 0) {
      this.startDay = this.daysOrdered.indexOf(this.firstDayOfWeek)
    }
    if (this.defaultStartMonth) {
      this.month = this.months.find(el => el.name === this.defaultStartMonth)?.value!
    }
    else {
      this.month = currentDate.getMonth() + 1;
    }

    if (this.defaultStartYear) {
      this.year = Number(this.defaultStartYear)
    }
    else {
      this.year = currentDate.getFullYear();
    }

    this.refreshCalendar();
  }

  refreshCalendar(): void {
    this.days = this.service.generateDaysOfCalendar(this.month, this.year, this.startDay)
  }

  get weeks(): number[][] {
    return this.days;
  }

  get dayNames(): string[] {
    return this.service.getDays(this.startDay)
  }

  isEventMatch(day: number) {
    console.log(this.listOfEvents[0].dateAsString);
    console.log(day.toString() + "/" + this.month.toString() + "/" + this.year.toString())
    return this.listOfEvents.find(el => el.dateAsString === day.toString() + "/" + this.month.toString() + "/" + this.year.toString())
  }

}

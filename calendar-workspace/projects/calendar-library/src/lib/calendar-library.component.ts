import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalendarLibraryService } from './calendar-library.service';

@Component({
  selector: 'lib-calendar-library',
  templateUrl: './calendar-library.component.html',
  styleUrls: ['./calendar-library.component.scss'],
  providers: [CalendarLibraryService]
})
export class CalendarLibraryComponent implements OnInit {
  public days: number[][] = [];
  private service: CalendarLibraryService
  public dayNames: string[] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
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

  @Input() defaultStartMonth: string = "";
  @Input() defaultStartYear: string = "";


  constructor(service: CalendarLibraryService) {
    this.service = service;
  }

  ngOnInit(): void {
    const currentDate = new Date();
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
    this.days = this.service.generateDaysOfCalendar(this.month, this.year)
  }

  get weeks(): number[][] {
    return this.days;
  }

}

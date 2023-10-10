import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalendarLibraryService {

  constructor() {

  }

  generateDaysOfCalendar(month: number, year: number) {
    const firstDayOfMonth = (new Date(year, month - 1, 1).getDay() + 6) % 7;

    const daysInMonth = new Date(year, month, 0).getDate();

    let dayCount = 1;
    var days: number[][] = [];

    for (let i = 0; i < 6; i++) {
      let week: number[] = [];
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDayOfMonth) {
          // Jours vides avant le premier jour du mois
          week.push(-1);
        } else if (dayCount <= daysInMonth) {
          week.push(dayCount);
          dayCount++;
        } else {
          // Jours vides après la fin du mois
          week.push(-1);
        }
      }
      days.push(week);
    }

    return days;
  }
}

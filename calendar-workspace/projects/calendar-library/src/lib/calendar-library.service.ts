import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalendarLibraryService {

  private dayNames: string[] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  constructor() {

  }

  getDays(firstDayOfWeek: number) {
    const startingIndex = firstDayOfWeek;
    if (startingIndex >= 0) {
      return [
        ...this.dayNames.slice(startingIndex),
        ...this.dayNames.slice(0, startingIndex)
      ];
    } else {
      throw new Error(`Invalid starting day: ${firstDayOfWeek}`);
    }
  }

  generateDaysOfCalendar(month: number, year: number, firstDayOfWeek: number) {
    const firstDayOfMonth = (new Date(year, month - 1, 1).getDay() - firstDayOfWeek + 6) % 7;

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

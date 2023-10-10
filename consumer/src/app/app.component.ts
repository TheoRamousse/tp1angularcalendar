import { Component } from '@angular/core';
import { CalendarEvent } from 'calendar-library';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'consumer';
  listOfEvents: CalendarEvent[] = []

  constructor() {
    this.listOfEvents.push(new CalendarEvent("Anniv", "Anniv de Théo", new Date(2000, 9, 8)))
  }
}

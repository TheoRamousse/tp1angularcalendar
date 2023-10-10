import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CalendarLibraryModule } from 'calendar-library'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CalendarLibraryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

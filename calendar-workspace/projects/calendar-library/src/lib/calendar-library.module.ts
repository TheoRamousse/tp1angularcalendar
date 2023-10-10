import { NgModule } from '@angular/core';
import { CalendarLibraryComponent } from './calendar-library.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    CalendarLibraryComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
  ],
  exports: [
    CalendarLibraryComponent
  ]
})
export class CalendarLibraryModule { }

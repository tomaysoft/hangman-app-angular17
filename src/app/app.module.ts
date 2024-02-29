import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HangmanComponent } from "./components/hangman/hangman.component";

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
  ],
  declarations: [
    AppComponent,
    HangmanComponent
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
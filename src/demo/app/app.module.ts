import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LibModule } from 'quickstart-lib';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserAnimationsModule, BrowserModule, LibModule],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

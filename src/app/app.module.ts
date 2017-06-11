import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MdChipsModule, MdToolbarModule} from '@angular/material';
import { VisitorCountComponent } from './components/visitor-count/visitor-count.component';

@NgModule({
  declarations: [
    AppComponent,
    VisitorCountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NoopAnimationsModule,
    MdToolbarModule,
    MdChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

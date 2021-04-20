import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListDateComponent } from './components/list-date/list-date.component';
import { CreateDateComponent } from './components/create-date/create-date.component';

@NgModule({
  declarations: [
    AppComponent,
    ListDateComponent,
    CreateDateComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

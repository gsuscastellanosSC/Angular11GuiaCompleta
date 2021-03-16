import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DasboardComponent } from './dasboard/dasboard.component';
import { DasboardManualComponent } from './dasboardManual/dasboardManual.component';

@NgModule({
  declarations: [
    AppComponent,
    DasboardComponent,
    DasboardManualComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

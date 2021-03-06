import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DasboardComponent } from './dasboard/dasboard.component';
import { DasboardManualComponent } from './dasboardManual/dasboardManual.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { TablaComponent } from './dasboard/tabla/tabla.component';
import { ListaComponent } from './dasboard/lista/lista.component';

@NgModule({
  declarations: [
    AppComponent,
    DasboardComponent,
    DasboardManualComponent,
    NavbarComponent,
    FooterComponent,
    TablaComponent,
    ListaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'citas';
  listDate: any[] = [];

  agregarCita(cita: any) {
    this.listDate.push(cita);
  }

  eliminarCitaListado(intex: number) {
    this.listDate.splice(intex, 1);
  }
}
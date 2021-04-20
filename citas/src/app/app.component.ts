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
    console.log("Soy el padre");
    this.listDate.push(cita);
    console.log(this.listDate);
  }
}



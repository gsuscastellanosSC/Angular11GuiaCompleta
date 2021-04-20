import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-date',
  templateUrl: './create-date.component.html',
  styleUrls: ['./create-date.component.css']
})
export class CreateDateComponent implements OnInit {
  nombre = '';
  fecha = '';
  hora = '';
  sintomas = '';
  formularioIncorrecto = false;

  constructor() { }

  ngOnInit(): void {

  }

  addDate() {
    if (this.nombre === '' || this.fecha === '' || this.hora === '' || this.sintomas === '') {
      this.formularioIncorrecto = true;
      return;
    }
    this.formularioIncorrecto = false;
    const CITA = {
      nombre: this.nombre,
      fecha: this.fecha,
      hora: this.hora,
      sintomas: this.sintomas
    }
    console.log(CITA);
    this.resetCampos();
  }
  resetCampos() {
    this.nombre = '';
    this.fecha = '';
    this.hora = '';
    this.sintomas = '';
  }
}

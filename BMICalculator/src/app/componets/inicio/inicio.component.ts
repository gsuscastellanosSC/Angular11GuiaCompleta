import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  edad = 25;
  peso = 60;
  altura = 170;
  sexo = '';

  constructor() { }

  ngOnInit(): void {
  }

  cambiarAltura( event: any): void{
    this.altura = event.target.value;
  }

  masculino(): void {
    this.sexo = "Masculino";
  }

  femenino(): void {
    this.sexo = 'Femenino';
  }


}

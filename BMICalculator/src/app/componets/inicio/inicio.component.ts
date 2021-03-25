import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) { }

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

  calcularBMI(): void{
    this.router.navigate(['/resultado']);
  }


}

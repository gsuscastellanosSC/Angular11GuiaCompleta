import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dados';
  dadoLeft = '../assets/img/dice1.png';
  dadoRight = '../assets/img/dice2.png';
  numero1: number | undefined;
  numero2: number | undefined;
  tirarDados(): void{
    this.numero1 = Math.round(Math.random()*5)+1;
    this.numero2 = Math.round(Math.random()*5)+1;
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {
  bmi: number = 0;
  resultado: string;
  interpretacion: string;
  constructor(private route: ActivatedRoute) {
    this.resultado = '';
    this.interpretacion = '';
    this.bmi = +route.snapshot.paramMap.get("valor")!;
    console.log(this.bmi);
   }
   
  ngOnInit(): void {
    this.getResultado();
  }

  getResultado():void {
    if(this.bmi >= 25){
      this.resultado = 'Execeso de peso';
      this.interpretacion = 'Tines un peso corporal superior al normal. Intenta hacer más ejercicio.'
    }else if(this.bmi >= 18.5){
      this.resultado = 'Normal';
      this.interpretacion = 'Tines un peso normal. !Buen trabajo!'
    }else{
      this.resultado = 'Bajo peso';
      this.interpretacion = 'Tines un peso corporal más bajo de lo normal. Puedes comer un poco más.'
    }
  }
  
}

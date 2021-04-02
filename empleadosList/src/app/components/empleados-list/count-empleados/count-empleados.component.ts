import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-count-empleados',
  templateUrl: './count-empleados.component.html',
  styleUrls: ['./count-empleados.component.css']
})
export class CountEmpleadosComponent implements OnInit {
  @Input() todos: number;
  @Input() totalFemeninos: number;
  @Input() totalMasculinos: number;

  radioButtonSeleccionado = "Todos";
  constructor() { 
    this.todos = 0;
    this.totalFemeninos = 0;
    this.totalMasculinos = 0;
  }

  ngOnInit(): void {
  }

}

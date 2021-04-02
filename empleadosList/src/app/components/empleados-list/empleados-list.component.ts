import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/Empleado';

@Component({
  selector: 'app-empleados-list',
  templateUrl: './empleados-list.component.html',
  styleUrls: ['./empleados-list.component.css']
})
export class EmpleadosListComponent implements OnInit {
  listEmpleados: Empleado[] = [
    {legajo: 1,nombre: 'Sc1', apellido: 'Cs1', sexo: 'Masculino', salario: 2501},
    {legajo: 2,nombre: 'Sc2', apellido: 'Cs2', sexo: 'Masculino', salario: 2502},
    {legajo: 3,nombre: 'Sc3', apellido: 'Cs3', sexo: 'Femenino', salario: 2503},
    {legajo: 4,nombre: 'Sc4', apellido: 'Cs4', sexo: 'Masculino', salario: 2504},
    {legajo: 5,nombre: 'Sc5', apellido: 'Cs5', sexo: 'Masculino', salario: 2505},
    {legajo: 6,nombre: 'Sc6', apellido: 'Cs6', sexo: 'Masculino', salario: 2506}
  ]

  radioButtonSeleccionado = "Todos";

  constructor() { }

  ngOnInit(): void {
  }
  obtenerTotalEmpleados(): number{
    return this.listEmpleados.length;
  }

  obtenerTotalFemeninos(): number{
    return this.listEmpleados.filter(list => list.sexo === 'Femenino').length;
  }
  
  obtenerTotalMasculinos(): number{
    return this.listEmpleados.filter(list => list.sexo === 'Masculino').length;
  }

  empleadoCountRadioButton(radioButtonSeleccionado: string): void{
    this.radioButtonSeleccionado = radioButtonSeleccionado;
  }
}

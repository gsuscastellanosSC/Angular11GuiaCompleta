import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/Tarea';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {
  listTareas: Tarea[] = []
  nombreTarea = '';

  constructor() { }

  ngOnInit(): void {
  }

  agregarTarea(){
    // Crear un objeto tara
    const tarea: Tarea ={
      nombre: this.nombreTarea,
      estado: false
    }
    // Agregar el objeto tarea al array
    if(tarea.nombre != ""){
      this.listTareas.push(tarea);
    }
    //Reset form
    this.nombreTarea = '';
  }

}

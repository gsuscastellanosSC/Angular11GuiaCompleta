import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list-date',
  templateUrl: './list-date.component.html',
  styleUrls: ['./list-date.component.css']
})
export class ListDateComponent implements OnInit {
  @Input() listadoDecitas: any;
  @Output() deleteCita = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }
  delete(indice:number){
    this.deleteCita.emit(indice);
  }
}

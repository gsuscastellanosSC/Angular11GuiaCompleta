import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-date',
  templateUrl: './list-date.component.html',
  styleUrls: ['./list-date.component.css']
})
export class ListDateComponent implements OnInit {
  @Input() listadoDecitas: any;

  constructor() { }

  ngOnInit(): void {
  }
}

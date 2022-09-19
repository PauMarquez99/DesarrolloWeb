import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-model',
  templateUrl: './ng-model.component.html',
  styleUrls: ['./ng-model.component.css']
})
export class NgModelComponent implements OnInit {

  lado = 1;
  cambiaLado(valor: number) { this.lado = valor;}

  constructor() { }
  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ej-ng-for',
  templateUrl: './ej-ng-for.component.html',
  styleUrls: ['./ej-ng-for.component.css']
})
export class EjNgForComponent implements OnInit {
  title = "Ejemplo NGFor";
  public nombres = [
    {nom: "uno", edad: 10},
    {nom: "dos", edad: 20},
    {nom: "tres", edad: 30},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'miapp';
  fondoAmarillo = false;
  letraGrande = false;
  checkFondo(){
    this.fondoAmarillo= !this.fondoAmarillo;
  }
  checkLetra(){
    this.letraGrande = !this.letraGrande;
  }
  asignaClasses(){
    let classes = {
      fa: this.fondoAmarillo,
      lg: this.letraGrande
    };
    return classes;
  }
}

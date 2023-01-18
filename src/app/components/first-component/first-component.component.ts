import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent {

  name: String = "João";
  age: number = 16;
  job: String = "Programador FULL STACK";
  hobbies = ["Malhar", "Ler"];
  car = {
    model: "Polo",
    year: 2010
  };
}

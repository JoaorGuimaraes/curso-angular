import { Component } from '@angular/core';
import { AnimalServiceService } from 'src/app/services/animal-service.service';
import { Animal } from '../../Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {

  animals= [
    {name:  "kira", age: 24},
    {name:  "tina", age: 3},
    {name:  "lua", age: 56}
  ]

  animalDetails: String = "";

  constructor(private animalService: AnimalServiceService){};

  onShowAge(animal: Animal){
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos`;
  }

  onRemove(animal: Animal){
    console.log("Removendo animal");
    
    this.animals = this.animalService.removerAnimal(this.animals, animal);
  }
}

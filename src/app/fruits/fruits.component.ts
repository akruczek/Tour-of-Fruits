import { Component, OnInit } from '@angular/core';
import { Fruit } from "./../fruit";
import { FruitService } from "./../fruit.service";

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent implements OnInit {

  fruits: Fruit[];

  constructor(private fruitService: FruitService) { }

  ngOnInit() {
    this.getFruits();
  }

  getFruits(): void {
    this.fruitService.getFruits().subscribe(fruits => this.fruits = fruits);
  }

  add(name: string, isSweet: boolean, isFruit: boolean): void {
    name = name.trim();
    if(!name) {return;}
    this.fruitService.addFruit({name, isSweet, isFruit} as Fruit).subscribe(fruit => {
      this.fruits.push(fruit);
    });
  }

  delete (fruit: Fruit): void {
    this.fruits = this.fruits.filter(f => f !== fruit);
    this.fruitService.deleteFruit(fruit).subscribe();
  }
  //MUST BE [!] .subscribe() !important

}

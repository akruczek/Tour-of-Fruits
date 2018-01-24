import { Component, OnInit } from '@angular/core';
import { Fruit } from "./../fruit";
import { FRUITS } from "./../mock-fruits";

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent implements OnInit {

  fruits = FRUITS;

  selectedFruit: Fruit;

  constructor() { }

  ngOnInit() {

  }

  onSelect(fruit: Fruit): void {
    this.selectedFruit = fruit;
  }

}

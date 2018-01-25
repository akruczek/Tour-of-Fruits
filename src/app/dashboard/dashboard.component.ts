import { Component, OnInit } from '@angular/core';
import { Fruit } from "./../fruit";
import { FruitService } from "./../fruit.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  fruits: Fruit[] = [];

  constructor(private fruitService: FruitService) { }

  ngOnInit() {
    this.getFruits();
  }

  getFruits(): void {
    this.fruitService.getFruits().subscribe(fruits => this.fruits = fruits.slice(1,5));
  }

}

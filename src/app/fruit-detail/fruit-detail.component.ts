import { Component, OnInit, Input } from '@angular/core';
import { Fruit } from "./../fruit";


@Component({
  selector: 'app-fruit-detail',
  templateUrl: './fruit-detail.component.html',
  styleUrls: ['./fruit-detail.component.css']
})

export class FruitDetailComponent implements OnInit {
  @Input() fruit: Fruit;

  constructor() { }


  ngOnInit() {

  }

}

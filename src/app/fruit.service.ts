import { Injectable } from '@angular/core';
import { Fruit } from "./fruit";
import { FRUITS } from "./mock-fruits";
import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";
import { MessageService } from "./message.service";

@Injectable()
export class FruitService {

  constructor(private messageService: MessageService) { }

  getFruits(): Observable<Fruit[]> {
    this.messageService.add("FruitService: fetched fruits");
    return  of(FRUITS);
  }

  getFruit(id: number): Observable<Fruit> {
    this.messageService.add(`FruitService: fetched fruit id=${id}`);
    return of(FRUITS.find(fruit => fruit.id === id));
  }

}

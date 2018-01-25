import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const fruits = [
      {id: 1, name: "Apple", isSweet: true, isFruit: true},
      {id: 2, name: "Orange", isSweet: true, isFruit: true},
      {id: 3, name: "Lemon", isSweet: false, isFruit: true},
      {id: 4, name: "Banana", isSweet: true, isFruit: true},
      {id: 5, name: "Currant", isSweet: false, isFruit: true},
      {id: 6, name: "Potato", isSweet: false, isFruit: false},
      {id: 7, name: "Kiwi", isSweet: false, isFruit: true},
      {id: 8, name: "Strawberry", isSweet: true, isFruit: true},
      {id: 9, name: "Grape", isSweet: true, isFruit: true},
      {id: 10, name: "Tomato", isSweet: true, isFruit: false},
      {id: 11, name: "Cherry", isSweet: false, isFruit: true},
    ];
    return {fruits};
  }
}

import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { of } from 'rxjs/observable/of';

import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { Fruit } from '../fruit';
import { FruitService } from '../fruit.service';

@Component({
  selector: 'app-fruit-search',
  templateUrl: './fruit-search.component.html',
  styleUrls: [ './fruit-search.component.css' ]
})
export class FruitSearchComponent implements OnInit {
  fruits$: Observable<Fruit[]>;
  private searchTerms = new Subject<string>();

  constructor(private fruitService: FruitService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.fruits$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.fruitService.searchFruits(term)),
    );
  }
}

import { Injectable } from '@angular/core';
import { Fruit } from "./fruit";
import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";
import { MessageService } from "./message.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, map, tap } from "rxjs/operators";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "Application/json" })
};

@Injectable()
export class FruitService {

  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) { }

  private log(message: string) {
    this.messageService.add("Fruit Service: " + message);
  }

  private fruitsUrl = "api/fruits";

  private handleError<T> (operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    }
  }

  getFruits(): Observable<Fruit[]> {
    return this.http.get<Fruit[]>(this.fruitsUrl).pipe(
        tap(fruits => this.log("fetched fruits")),
        catchError(this.handleError("getFruits", []))
      );
  }

  getFruit(id: number): Observable<Fruit> {
    const url = `${this.fruitsUrl}/${id}`;
    return this.http.get<Fruit>(url).pipe (
      tap(_ => this.log(`fetched fruit id=${id}`)),
      catchError(this.handleError<Fruit>(`getFruit id=${id}`))
    );
  }

  //http.put(<url>, <data-to-update>, <options>) !important

  updateFruit(fruit: Fruit): Observable<any> {
    return this.http.put(this.fruitsUrl, fruit, httpOptions).pipe(
      tap(_ => this.log(`updated fruit id=${fruit.id}`)),
      catchError(this.handleError<any>("updateFruit"))
    )
  }

  addFruit(fruit: Fruit): Observable<Fruit> {
    return this.http.post<Fruit>(this.fruitsUrl, fruit, httpOptions).pipe (
      tap((fruit: Fruit) => this.log(`added new fruit w/ id=${fruit.id}`)),
      catchError(this.handleError<Fruit>("addFruit"))
    )
  }

  deleteFruit (fruit: Fruit | number): Observable<Fruit> {
    const id = typeof fruit === "number" ? fruit : fruit.id;
    const url = `${this.fruitsUrl}/${id};`

    return this.http.delete<Fruit>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted fruit id=${id}`)),
      catchError(this.handleError<Fruit>("deleteFruit"))
    );
  }

}

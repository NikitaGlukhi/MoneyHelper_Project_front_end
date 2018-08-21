import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

const url = 'http://localhost:3000'

@Injectable()
export class AppSetInitialDataService {

  constructor(private http: HttpClient) {  }

  private handleError(error: HttpErrorResponse) {
    if(error.error instanceof ErrorEvent) {
      console.error('An error occurred: ', error.error.message)
    } else {
     console.error(
        `Back-end returned code: ${error.status}` +
        `body was: ${error.error}`);
    }
    return new ErrorObservable('Something bad happened; please try again later.');
  }

  setInitialData(data: {all_date: string, all_amount: number}): Observable<any> {
    return this.http.post(`${url}/initial-data/set-initial-data`, data)
      .pipe(
        catchError(this.handleError)
      )
  }
}

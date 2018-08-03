import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AppDailyWasteService {

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

  getUseId(): Observable<any> {
    return this.http.get('/initial-data/get-used-id').pipe(
      catchError(this.handleError)
    )
  }

}

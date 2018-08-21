import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

const url = 'http://localhost:3000'

@Injectable()
export class AppDailyWasteService {

  constructor(private http: HttpClient) {
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred: ', error.error.message)
    } else {
      console.error(
        `Back-end returned code: ${error.status}` +
        `body was: ${error.error}`);
    }
    return new ErrorObservable('Something bad happened; please try again later.');
  }

  getDailyWasteFoodData(): Observable<any> {
    return this.http.get(`${url}/initial-data/get-daily-waste-food`).pipe(
      catchError(this.handleError)
    )
  }

  getDailyWasteCommunalData(): Observable<any> {
    return this.http.get(`${url}/initial-data/get-daily-waste-communal`).pipe(
      catchError(this.handleError)
    )
  }

  getDailyWasteTrasportData(): Observable<any> {
    return this.http.get(`${url}/initial-data/get-daily-waste-transport`).pipe(
      catchError(this.handleError)
    )
  }

  getDailyWasteOtherData(): Observable<any> {
    return this.http.get(`${url}/initial-data/get-daily-waste-other`).pipe(
      catchError(this.handleError)
    )
  }

}

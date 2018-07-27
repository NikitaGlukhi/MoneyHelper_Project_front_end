import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AppDistributionDataService {

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

  addDistributedData(data: {initial_id: string, all_food: number, all_communal: number, all_transport: number, all_other: number}): Observable<any> {
    return this.http.post('/initial-data/set-distributed-data', data).pipe(
      catchError(this.handleError)
    )
  }

}

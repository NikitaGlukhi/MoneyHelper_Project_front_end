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

  getDistributedFoodData() {
    return this.http.get('/initial-data/get-distributed-food-data').pipe(
      catchError(this.handleError)
    )
  }

  addDailyWasteFoodChanges(data: {
    all_upd_food_amount: number,
    all_upd_daily_waste: number,
    all_upd_total_waste: number,
    all_upd_remainder: number
  }): Observable<any> {
    return this.http.put('/initial-data/add-daily-waste-food-upd', data).pipe(
      catchError(this.handleError)
    )
  }

  addFoodAmount(data: {all_food_amount: number, all_remainder: number}): Observable<any> {
    return this.http.put('/initial-data/add-food-daily-waste-data', data).pipe(
      catchError(this.handleError)
    )
  }

  addCommunalAmount(data: {all_communal_amount: number, all_communal_remainder: number}): Observable<any> {
    return this.http.put('/initial-data/add-communal-daily-waste-data', data).pipe(
      catchError(this.handleError)
    )
  }

  addDailyWasteCommunalChanges(data: {
    all_upd_communal_amount: number,
    all_upd_communal_daily_waste: number,
    all_upd_communal_total_waste: number,
    all_upd_communal_remainder: number}): Observable<any> {
    return this.http.put('/initial-data/add-communal-daily-waste-data-upd', data).pipe(
      catchError(this.handleError)
    )
  }

  getDistributedCommunalData() {
    return this.http.get('/initial-data/get-distributed-communal-data').pipe(
      catchError(this.handleError)
    )
  }

  addTransportAmount(data: {all_transport_amount: number, all_transport_remainder: number}): Observable<any> {
    return this.http.put('/initial-data/add-daily-waste-transport-data', data).pipe(
      catchError(this.handleError)
    )
  }

  addDailyWasteTransportData(data: {
    all_upd_transport_amount: number,
    all_upd_transport_daily_waste: number,
    all_upd_transport_total_waste: number,
    all_upd_transport_remainder: number
  }): Observable<any> {
    return this.http.put('/initial-data/add-daily-waste-transport-data-upd', data).pipe(
      catchError(this.handleError)
    )
  }

  getDistributedTransportData(): Observable<any> {
    return this.http.get('/initial-data/get-distributed-transport-data').pipe(
      catchError(this.handleError)
    )
  }

  addOtherAmount(data: {all_other_amount: number, all_other_reminder: number}): Observable<any> {
    return this.http.put('/initial-data/add-daily-waste-other-data', data).pipe(
      catchError(this.handleError)
    )
  }

  addDailyWasteOtherData(data: {
    all_upd_other_amount: number,
    all_upd_other_daily_waste: number,
    all_upd_other_total_waste: number,
    all_upd_other_remainder: number
  }): Observable<any> {
    return this.http.put('/initial-data/add-daily-waste-other-data-upd', data).pipe(
      catchError(this.handleError)
    )
  }

  getDistributedOtherData(): Observable<any> {
    return this.http.get('/initial-data/get-distributed-other-data').pipe(
      catchError(this.handleError)
    )
  }
}

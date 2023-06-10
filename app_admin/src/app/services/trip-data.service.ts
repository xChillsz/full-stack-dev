import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Trip } from  '../models/trip';
import { d } from '@angular/core/src/render3';

@Injectable(
  //{providedIn: 'root'}
  )
export class TripDataService {

  constructor(private http: Http) { }

  private apiBaseUrl = 'http://localhost:3000/api/';

  public getTrips(): Promise<Trip[]> {
    console.log('Inside TripDataService#getTrips');
    return this.http
        .get(`${this.apiBaseUrl}trips`)
        .toPromise()
        .then(response => response.json() as Trip[])
        .catch(this.handleError);
  }

  public addTrip(formData: Trip): Promise<Trip> {
    console.log('Inside TripDataService#addTrip')
    return this.http
    .post(`${this.apiBaseUrl}trips`, formData)
    .toPromise()
    .then(response => response.json() as Trip[])
    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Something has gone wrong', error);
    return Promise.reject(error.message || error);
  }
}

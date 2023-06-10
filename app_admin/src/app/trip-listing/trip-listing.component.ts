import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { TripDataService } from '../services/trip-data.service';
import { Trip } from '../models/trip';

@Component({
  selector: 'app-trip-listing',
  templateUrl: './trip-listing.component.html',
  styleUrls: ['./trip-listing.component.css'],
  providers: [TripDataService]
})
export class TripListingComponent implements OnInit {

  //trips: Array<any> = trips;
  trips: Trip[];

  message: string;

  constructor(
    private tripDataService: TripDataService,
    private router: Router
    ) { }
  
  private addTrip(): void{
    this.router.navigate(['add-trip']);
  }

  private getTrips(): void{
    console.log('Inside TripListingComponent#getTrips');
    this.message = 'Searching for Trips';
    this.tripDataService
      .getTrips()
        .then(foundTrips => {
          this.message = foundTrips.length > 0 ? '' : 'No trips found';
          this.trips = foundTrips;
        })
  }

  ngOnInit() {
    this.getTrips();
  }
}
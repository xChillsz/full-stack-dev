import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";
import { Trip } from '../models/trip';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-trip-card',
  templateUrl: './trip-card.component.html',
  styleUrls: ['./trip-card.component.css']
})
export class TripCardComponent implements OnInit {
  @Input('trip') trip: any;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
  }

  public isLoggedIn(): boolean {
    return this.authenticationService.isLoggedIn();
  }
  
  private editTrip(trip: Trip): void {
    localStorage.removeItem("id");
    localStorage.removeItem("tripCode");
    localStorage.removeItem("desc");
    localStorage.removeItem("img");
    localStorage.removeItem("length");
    localStorage.removeItem("name");
    localStorage.removeItem("perPerson");
    localStorage.removeItem("resort");
    localStorage.setItem("id", trip._id);
    localStorage.setItem("tripCode", trip.code);
    localStorage.setItem("desc", trip.description);
    localStorage.setItem("img", trip.image);
    localStorage.setItem("length", trip.length);
    localStorage.setItem("name", trip.name);
    localStorage.setItem("perPerson", trip.perPerson);
    localStorage.setItem("resort", trip.resort);
    this.router.navigate(['edit-trip']);
  }

}

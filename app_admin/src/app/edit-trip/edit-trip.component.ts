import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from
  "@angular/forms";
import { Router } from "@angular/router";
import { TripDataService } from '../services/trip-data.service';


@Component({
  selector: 'app-edit-trip',
  templateUrl: './edit-trip.component.html',
  styleUrls: ['./edit-trip.component.css']
})

export class EditTripComponent implements OnInit {
  editForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private tripService: TripDataService
  ) { }

  ngOnInit() {

    let tripCode = localStorage.getItem("tripCode");
    let desc = localStorage.getItem("desc");
    let img = localStorage.getItem("img");
    let length = localStorage.getItem("length");
    let name = localStorage.getItem("name");
    let perPerson = localStorage.getItem("perPerson");
    let resort = localStorage.getItem("resort");

    if (!tripCode) {
      alert("Something wrong, couldn't find where I stashed tripCode!");
      this.router.navigate(['']);
      return;
    }
    
    if (!desc) {
      alert("Something wrong, couldn't find where I stashed desc!");
      this.router.navigate(['']);
      return;
    }
    if (!img) {
      alert("Something wrong, couldn't find where I stashed img!");
      this.router.navigate(['']);
      return;
    }
    if (!length) {
      alert("Something wrong, couldn't find where I stashed length!");
      this.router.navigate(['']);
      return;
    }
    if (!name) {
      alert("Something wrong, couldn't find where I stashed name!");
      this.router.navigate(['']);
      return;
    }
    if (!perPerson) {
      alert("Something wrong, couldn't find where I stashed perPerson!");
      this.router.navigate(['']);
      return;
    }
    if (!resort) {
      alert("Something wrong, couldn't find where I stashed resort!");
      this.router.navigate(['']);
      return;
    }

    this.editForm = this.formBuilder.group({
      _id: [],
      code: [tripCode, Validators.required],
      name: [name, Validators.required],
      length: [length, Validators.required],
      start: ['', Validators.required],
      resort: [resort, Validators.required],
      perPerson: [perPerson, Validators.required],
      image: [img, Validators.required],
      description: [desc, Validators.required],
    })

    this.tripService.getTrip(tripCode)
      .then(data => {
        console.log(data);
        this.editForm.patchValue(data)
      })
  }

  onSubmit() {
    this.submitted = true;
    if (this.editForm.valid) {
      this.tripService.updateTrip(this.editForm.value)
        .then(data => {
          console.log(data);
          this.router.navigate(['']);
        });
    }
  }

  get f() { return this.editForm.controls; }
}

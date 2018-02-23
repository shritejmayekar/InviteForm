import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import * as $ from 'jquery';


@Component({
  selector: 'app-qualification',
  templateUrl: './qualification.component.html',
  styleUrls: ['./qualification.component.scss']
})
export class QualificationComponent implements OnInit {
  qualifiactions = [
    { value: 'BSc-0', viewValue: 'BSc' },
    { value: 'BE-1', viewValue: 'BE' },
    { value: 'BTech-2', viewValue: 'BTech' },
    { value: 'ME-3', viewValue: 'ME' },
    { value: 'MTech-4', viewValue: 'MTech' }
  ];
  hiringCities = [
    { value: 'Bengalaru-0', viewValue: 'Bengalaru' },
    { value: 'Mumbai-1', viewValue: 'Mumabai' },
    { value: 'Delhi-2', viewValue: 'Delhi' }
  ];
  constructor(private router: Router, private location: Location) { }
  ngOnInit() {
    $('#extraQualification').hide();

  }
  AddQualification() {
    $('#extraQualification').show();
  }
  HideQualification() {
    $('#extraQualification').hide();

  }
  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    console.log(form.value);
    console.log();
    localStorage.setItem('profileDetails', JSON.stringify(form.value));
    this.router.navigateByUrl('/personalData');

  }
  previous() {
    this.location.back();

  }
}


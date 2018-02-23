import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.scss']
})
export class PersonalDataComponent implements OnInit {

  constructor(private location: Location, private router: Router) { }
  relationAs = [
    { value: 'Mother-0', viewValue: 'Mother' },
    { value: 'Father-1', viewValue: 'Father' },
    { value: 'Uncle-2', viewValue: 'Uncle' }


  ];

  email = new FormControl('', [Validators.required, Validators.email]);
  firstName = new FormControl('', [Validators.required, Validators.nullValidator]);
  mobileNumber = new FormControl('', [Validators.required, Validators.nullValidator]);
  getErrorMessageMobile() {
    return this.mobileNumber.hasError('required') ? 'You must enter a value' :
      this.mobileNumber.hasError('mobileNumber') ? 'Not a valid mobile' :
        '';
  }
  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }
  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    console.log(this.email);
    console.log(form.value);
    localStorage.setItem('personalDetails', JSON.stringify(form.value));
    this.router.navigateByUrl('/profileUpload');
  }
  previous() {
    this.location.back();

  }

}

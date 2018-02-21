import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.scss']
})
export class PersonalDataComponent implements OnInit {

  constructor() { }
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
  }

}

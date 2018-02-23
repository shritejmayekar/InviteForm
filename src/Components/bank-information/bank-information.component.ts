import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, NgForm } from '@angular/forms';
import { Location } from '@angular/common';


import { Router } from '@angular/router';

@Component({
  selector: 'app-bank-information',
  templateUrl: './bank-information.component.html',
  styleUrls: ['./bank-information.component.scss']
})
export class BankInformationComponent implements OnInit {


  constructor(private router: Router, private location: Location) { }
  panNumber = new FormControl('', [Validators.required]);
  aadharId = new FormControl('', [Validators.required, Validators.maxLength(12)]);
  bankName = new FormControl('', Validators.required);
  accountName = new FormControl('', Validators.required);
  getError() {
    return this.panNumber.hasError('required') ? 'Please enter valid PAN no.' :
      this.panNumber.hasError('*') ? 'Please enter valid PAN no.' :
        '';
  }
  getErrorAadhar() {
    return this.aadharId.hasError('required') ? 'Please enter valid aadhar no.' :
      this.aadharId.hasError('*') ? 'Please enter valid aadhar no.' :
        '';
  }
  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    console.log(form.value);
    localStorage.setItem('bankDetails', JSON.stringify(form.value));
    this.router.navigateByUrl('/qualification');

  }
  previous() {
    this.location.back();

  }

}

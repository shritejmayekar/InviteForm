import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { DataService } from '../../app/data.service';
import { environment } from '../../environments/environment';


import { Router } from '@angular/router';

@Component({
  selector: 'app-bank-information',
  templateUrl: './bank-information.component.html',
  styleUrls: ['./bank-information.component.scss']
})
export class BankInformationComponent implements OnInit {


  constructor(private router: Router, private location: Location, private commonService: DataService) { }
  public bankObject: any;
  panNumber = new FormControl('', [Validators.required]);
  aadhaarId = new FormControl('', [Validators.required, Validators.maxLength(12)]);
  bankName = new FormControl('', Validators.required);
  accountName = new FormControl('', Validators.required);
  accountNumber = new FormControl('', Validators.required);
  ifscCode = new FormControl('', Validators.required);
  getError() {
    return this.panNumber.hasError('required') ? 'Please enter valid PAN no.' :
      this.panNumber.hasError('*') ? 'Please enter valid PAN no.' :
        '';
  }
  getErrorAadhar() {
    return this.aadhaarId.hasError('required') ? 'Please enter valid aadhar no.' :
      this.aadhaarId.hasError('*') ? 'Please enter valid aadhar no.' :
        '';
  }
  ngOnInit() {
    this.commonService.getService(environment.baseUrl + 'verify/' + 'ab6ecd')
      // this.commonService.getService(environment.baseUrl + 'verify/')

      .subscribe(data => {
        console.log(data.data);
        // console.log(data);
        if (data.data) {
          localStorage.setItem('bankDetails', JSON.stringify(data.data.bankDetails));
        }
      });
    if (localStorage.getItem('bankDetails')) {
      this.bankObject = JSON.parse(localStorage.getItem('bankDetails'));
      this.panNumber = this.bankObject.panNumber;
      this.aadhaarId = this.bankObject.aadhaarId;
      this.bankName = this.bankObject.bankName;
      this.accountName = this.bankObject.accountName;
      this.accountNumber = this.bankObject.accountNumber;
      this.ifscCode = this.bankObject.ifscCode;

    } else {
      this.panNumber = '';
      this.aadhaarId = '';
      this.bankName = '';
      this.accountName = '';
      this.accountNumber = '';
      this.ifscCode = '';


    }
  }
  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    console.log(form.value);
    localStorage.setItem('bankDetails', JSON.stringify(form.value));
    this.datas = {
      bankDetails: form.value
    };

    this.commonService.postService(environment.baseUrl + 'addEmployeeData?' + 'formSection=bankDetails&employeeToken=ab6ecd',
      this.datas)
      .subscribe(data => {
        console.log(data);
      });

    this.router.navigateByUrl('/qualification');

  }
  previous() {
    this.location.back();

  }

}

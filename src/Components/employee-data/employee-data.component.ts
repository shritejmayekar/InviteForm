import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../../app/data.service';
import { environment } from '../../environments/environment';
@Component({
  selector: 'app-employee-data',
  templateUrl: './employee-data.component.html',
  styleUrls: ['./employee-data.component.scss']
})
export class EmployeeDataComponent implements OnInit {
  public url: any = 'http://localhost:3000/auth/login';
  datas: any = {
    email: 'shritejmayekar69@gmail.com',
    password: '123456789'
  };
  genders = [
    'Male', 'Female'
  ];
  constructor( private router: Router, private commonService: DataService) { }
  // emailAddress = new FormControl('', [Validators.required]);
  public employeeDataObject: any;
  emailAddress: any;
  firstName: any = new FormControl('', [Validators.required]);
  lastName: any = new FormControl('', [Validators.required, Validators.minLength(5)]);
  middleName: any = new FormControl('', [Validators.required, Validators.minLength(5)]);
  phone: any = new FormControl('', Validators.required);

  // getErrorMessage() {
  //   return this.emailAddress.hasError('required') ? 'You must enter a value' :
  //     this.emailAddress.hasError('email') ? 'Not a valid email' :
  //       '';
  // }
  ngOnInit() {
    this.commonService.postService(this.url, this.datas)
      .subscribe(data => {
        console.log(data);
      });
    this.commonService.getService(environment.baseUrl + 'verify/' + 'ab6ecd')
      // this.commonService.getService(environment.baseUrl + 'verify/')

      .subscribe(data => {
        console.log(data.data);
        // console.log(data);
        if (data.data) {


          localStorage.setItem('bankDetails', JSON.stringify(data.data.bankDetails));
          localStorage.setItem('employeeDetails', JSON.stringify(data.data.employeeDetails));
          localStorage.setItem('employeeObjectId', JSON.stringify(data.data.employeeObjectId));
          localStorage.setItem(' inviteFormDetails', JSON.stringify(data.data.inviteFormDetails));
          localStorage.setItem('personalDetails', JSON.stringify(data.data.personalDetails));
          localStorage.setItem('profileDetails', JSON.stringify(data.data.profileDetails));
          localStorage.setItem('profileImageDetails', JSON.stringify(data.data.profileImageDetails));
        }
      });
    if (localStorage.getItem('employeeDetails')) {
      this.employeeDataObject = JSON.parse(localStorage.getItem('employeeDetails'));
      this.emailAddress = this.employeeDataObject.emailAddress;
      this.firstName = this.employeeDataObject.firstName;
      this.middleName = this.employeeDataObject.middleName;
      this.lastName = this.employeeDataObject.lastName;
      this.phone = this.employeeDataObject.phone;
    } else {
      this.emailAddress = '';
      this.firstName = '';
      this.middleName = '';
      this.lastName = '';
      this.phone = '';
    }

  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    console.log(form.value);
    localStorage.setItem('employeeDetails', JSON.stringify(form.value));
    // this.employeeDetails = JSON.parse(localStorage.getItem('employeeDetails'));
   this.datas = {
     employeeDetails: form.value
   };
    this.commonService.postService(environment.baseUrl + 'addEmployeeData?' + 'formSection=employeeDetails&employeeToken=ab6ecd',
      this.datas)
      .subscribe(data => {
        console.log(data);
      });
    // this.router.navigate(['/bankInfo']);
    this.router.navigateByUrl('/bankInfo');

  }



}

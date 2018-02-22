import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-data',
  templateUrl: './employee-data.component.html',
  styleUrls: ['./employee-data.component.scss']
})
export class EmployeeDataComponent implements OnInit {

  constructor( private router: Router) { }
   emailAddress = new FormControl('', [Validators.required, Validators.email]);
  firstName = new FormControl('', [Validators.required ]);
  lastName = new FormControl('', [Validators.required, Validators.minLength(5)]);
  middleName = new FormControl('', [Validators.required, Validators.minLength(5)]);
  getErrorMessage() {
    return this.emailAddress.hasError('required') ? 'You must enter a value' :
      this.emailAddress.hasError('email') ? 'Not a valid email' :
        '';
  }
  ngOnInit() {
  }
onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }
      console.log(form.value);
  localStorage.setItem('employeeDetails', JSON.stringify(form.value));
  // this.router.navigate(['/bankInfo']);
  this.router.navigateByUrl('/bankInfo');

  }


}

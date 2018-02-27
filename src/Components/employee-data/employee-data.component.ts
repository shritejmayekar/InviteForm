import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, Validators, NgForm } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DataService } from '../../app/data.service';
import { environment } from '../../environments/environment';
import {FormsService} from '../../app/forms.service';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-employee-data',
  templateUrl: './employee-data.component.html',
  styleUrls: ['./employee-data.component.scss']
})
export class EmployeeDataComponent implements OnInit {
  datas: any;
  public activities$: Observable<any>;

  genders = [
    'Male', 'Female'
  ];
  constructor( private router: Router, private commonService: DataService,
    private activatedRoute: ActivatedRoute, private formService: FormsService) {
    this.activatedRoute.params.subscribe(res => {
      console.log(res.token);
      localStorage.setItem('EmployeeToken', JSON.stringify(res.token));
    });
  }
  public employeeDataObject: any;
  emailAddress: any;
  firstName: any = new FormControl('', [Validators.required]);
  lastName: any = new FormControl('', [Validators.required, Validators.minLength(5)]);
  middleName: any = new FormControl('', [Validators.required, Validators.minLength(5)]);
  phone: any = new FormControl('', Validators.required);
  gender: any;

  ngOnInit() {
        this.formService.getCongfigData();
        this.setData();
  }
  setData() {
    if (localStorage.getItem('employeeDetails')) {
      this.employeeDataObject = JSON.parse(localStorage.getItem('employeeDetails'));
      // this.activities$ = this.formService.loadLocalData;
      console.log(this.activities$);
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
    this.commonService.postService(environment.baseUrl + 'addEmployeeData?' +
      'formSection=employeeDetails&employeeToken=' +
      JSON.parse(localStorage.getItem('EmployeeToken')),
      this.datas)
      .subscribe(data => {
        console.log(data);
      });
    this.router.navigateByUrl('/bankInfo');

  }
  onDestroy() {
    this.Subscription.unsubscribe();
  }


}

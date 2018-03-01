import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, Validators, NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { DataService } from '../../app/data.service';
import { environment } from '../../environments/environment';
import { FormsService } from '../../app/forms.service';
@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.scss']
})
export class PersonalDataComponent implements OnInit {
  public datas: any;
  public dataObject: any;
  public toggleElment: Boolean = false;
  name: any;
  contact: any;
  occupation: any;
  relationAs: any;
  address: any;
  permanentAddress: any;
  dob: any;
  relativeAnnualSalary: any;
  constructor(private location: Location, private router: Router,
    private commonService: DataService) { }
  relationAsa = JSON.parse(localStorage.getItem('configData')).relation_type;
  ngOnInit() {
    this.dataObject = JSON.parse(localStorage.getItem('personalDetails'));
  //   if (this.dataObject) {
  //   for (let i = 0; i <= this.dataObject.employeeRelative.length; i++) {
  //     this.name = this.dataObject.employeeRelative[i].name;
  //     this.contact = this.dataObject.employeeRelative[i].contact;
  //     this.occupation = this.dataObject.employeeRelative[i].occupation;
  //     this.relationAs = this.dataObject.employeeRelative[i].relationAs;
  //     this.address = this.dataObject.address;
  //     this.permanentAddress = this.dataObject.permanentAddress;
  //     this.dob = this.dataObject.dob;
  //     this.relativeAnnualSalary = this.dataObject.employeeRelative[i].relativeAnnualSalary;
  //   }
  // }
  }
  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }

    if (form.value.sameAddress) {
      form.value.address = form.value.permanentAddress;
    }
    this.datas = {
      'personalDetails': {
        'dob': form.value.dob,
        'employeeRelative': [{
          'name': form.value.name,
          'contact': form.value.contact,
          'occupation': form.value.occupation,
          'relationAs': form.value.relationAs,
          'relativeAnnualSalary': form.value.relativeAnnualSalary,
        }],
        'address': form.value.address,
        'permanentAddress': form.value.permanentAddress

      }
    };
    console.log(this.datas.personalDetails);
    localStorage.setItem('personalDetails', JSON.stringify(this.datas.personalDetails));
    this.commonService.postService(environment.baseUrl + 'addEmployeeData?' +
      'formSection=personalDetails&employeeToken=' +
      JSON.parse(localStorage.getItem('EmployeeToken')),
      this.datas)
      .subscribe(data => {
        console.log(data);
      });
    this.router.navigateByUrl('/profileUpload');
  }
  previous() {
    this.location.back();

  }

}

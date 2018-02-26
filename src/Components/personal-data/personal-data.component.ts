import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { DataService } from '../../app/data.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.scss']
})
export class PersonalDataComponent implements OnInit {
  public datas: any;
  public dataObject: any;
  public toggleElment: Boolean = false;
  constructor(private location: Location, private router: Router,
    private commonService: DataService) { }
  relationAsa = JSON.parse(localStorage.getItem('configData')).relation_type;
  ngOnInit() {
    this.dataObject = JSON.parse(localStorage.getItem('personalDetails'));
    console.log(this.dataObject.employeeRelative[0].name);
    this.name = this.dataObject.employeeRelative[0].name;
    this.contact = this.dataObject.employeeRelative[0].contact;
    this.occupation = this.dataObject.employeeRelative[0].occupation;
    this.relationAs = this.dataObject.employeeRelative[0].relationAs;
    this.address = this.dataObject.address;
    this.permanentAddress = this.dataObject.permanentAddress;
    this.dob = this.dataObject.dob;
    this.relativeAnnualSalary = this.dataObject.employeeRelative[0].relativeAnnualSalary;
  }
//  toggle(f) {
//    console.log(f);
//    if (NgForm.checked === true) {
//      f.address.value = f.permanentAddress.value;
//    }
//     // this.toggleElment = !this.toggleElment;
//     // if (this.toggleElment) {
//     //   console.log(log);

//     // } else {
//     //   this.address = '';
//     // }
//   }
  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
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
    //  console.log(form.value);
    console.log(this.datas);
    localStorage.setItem('personalDetails', JSON.stringify(this.datas));
    this.commonService.postService(environment.baseUrl + 'addEmployeeData?' + 'formSection=personalDetails&employeeToken=ab6ecd',
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

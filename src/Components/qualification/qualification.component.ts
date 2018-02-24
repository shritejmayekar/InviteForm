import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { DataService } from '../../app/data.service';
import { environment } from '../../environments/environment';
import * as $ from 'jquery';


@Component({
  selector: 'app-qualification',
  templateUrl: './qualification.component.html',
  styleUrls: ['./qualification.component.scss']
})
export class QualificationComponent implements OnInit {
  public dataObject: any;
  discipline: any;
  college: any;
  university: any;
  typeOfQualification: any;
  aggregatePercentage: any;
  yearOfPassing: any;
  qualification: any;
  qualifiactions = [
    { value: 'Diploma', viewValue: 'Diploma' },
    { value: 'Degree', viewValue: 'Degree' },
    { value: 'Master', viewValue: 'Master' },
  ];
  hiringCities = JSON.parse(localStorage.getItem('configData')).cityData;
  passingYear = [
    { value: '1991', viewValue: '1991' },
    { value: '1992', viewValue: '1992' },
    { value: '1993', viewValue: '1993' },
    { value: '1994', viewValue: '1994' },
    { value: '1995', viewValue: '1995' },
    { value: '1996', viewValue: '1996' },
    { value: '1997', viewValue: '1997' },
    { value: '1998', viewValue: '1998' },
    { value: '1999', viewValue: '1999' },
    { value: '2000', viewValue: '2000' }
  ];
  constructor(private router: Router, private location: Location, private commonService: DataService) { }
  ngOnInit() {
    $('#extraQualification').hide();
    this.commonService.getService(environment.baseUrl + 'readConfig?configType=city')
      .subscribe(data => {
        console.log(data.data);
        localStorage.setItem('configData', JSON.stringify(data.data));
      });
    this.dataObject = JSON.parse(localStorage.getItem('profileData'));
    this.discipline = this.dataObject.academic[0].discipline;
    this.college = this.dataObject.academic[0].college;
    this.university = this.dataObject.academic[0].university;
    this.yearOfPassing = this.dataObject.academic[0].yearOfPassing;
    this.qualification = this.dataObject.academic[0].qualification;
    this.typeOfQualification = this.dataObject.academic[0].typeOfQualification;
    this.aggregatePercentage = this.dataObject.academic[0].aggregatePercentage;

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
    form.value.id = 'choice1';
    form.value.finalYearPercentageQualification = '';
    form.value.finalYearPercentage = '0';
    this.dataObject = {
      'profileDetails': {
        'academic': [form.value],
        'training': [{
          'institute': ''
        }],
      }
    };
    // console.log(JSON.parse(this.dataObject));
    this.commonService.postService(environment.baseUrl + 'addEmployeeData?' + 'formSection=profileDetails&employeeToken=ab6ecd',
      this.dataObject)
      .subscribe(data => {
        console.log(data);
        this.commonService.getService(environment.baseUrl + 'verify/' + 'ab6ecd')
          .subscribe(data => {
            console.log(data.data);
            // console.log(data);
            if (data.data) {
              localStorage.setItem('profileData', JSON.stringify(data.data.profileDetails));
            }
          });
      });
    this.router.navigateByUrl('/personalData');

  }
  previous() {
    this.location.back();

  }
}


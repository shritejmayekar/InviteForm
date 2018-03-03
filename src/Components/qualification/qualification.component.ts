import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { DataService } from '../../app/data.service';
import { environment } from '../../environments/environment';
import * as $ from 'jquery';

import { FormArray, FormBuilder, FormGroup, } from '@angular/forms';
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
  aggregatePercentage: any;
  typeOfQualification: any;
  yearOfPassing: any;
  academics: any;
  qualification: any;
  qualifiactions = JSON.parse(localStorage.getItem('configData')).qualification;
  hiringCities = JSON.parse(localStorage.getItem('cityData'));
  passingYear = [];
  counter = [];
  public myForm: FormGroup; // our form model
  constructor(private router: Router, private formBuilder: FormBuilder, private location: Location, private commonService: DataService) { }
  // ngOnInit() {
  //   $('#extraQualification').hide();
  //   for (let indexs = 1991; indexs < 2019; indexs++) {
  //     this.passingYear.push(indexs);
  //   }

  //   this.myForm = this.formBuilder.group({
  //     name: ['', [Validators.required, Validators.minLength(5)]],
  //     addresses: this.formBuilder.array([
  //       this.initAddress(),
  //     ])
  //   });
  ngOnInit() {
    this.dataObject = JSON.parse(localStorage.getItem('profileData'));
    for (let indexs = 1991; indexs < 2019; indexs++) {
      this.passingYear.push(indexs);
    }
    this.myForm = this.formBuilder.group({
      qualificationArray: this.formBuilder.array([
        this.initAddress(),
      ])
    });
  }
  initAddress() {
    // initialize our address
    return this.formBuilder.group({
      typeOfQualification: ['', Validators.required],
      qualification: ['', Validators.required],
      discipline: ['', Validators.required],
      college: ['', Validators.required],
      university: ['', Validators.required],
      yearOfPassing: ['', Validators.required],
      aggregatePercentage: ['', Validators.required],


    });
  }
  addAddress() {
    // add address to the list
    const control = <FormArray>this.myForm.controls['qualificationArray'];
    control.push(this.initAddress());
  }
  removeAddress(i: number) {
    // remove address from the list
    const control = <FormArray>this.myForm.controls['qualificationArray'];
    control.removeAt(i);
  }
  save(model) {
    
    // call API to save customer
    console.log(model.value);
    this.dataObject = {
      'profileDetails': {
        'academic': model.value.qualificationArray,
        'training': [{
          'institute': model.value.institute,
          'duration': model.value.duration,
          'trainingIn': model.value.trainingIn,
          'location': model.value.location
        }],
      },
      'hiringCity': model.value.hiringCity,
      'hiringPlace': model.value.hiringPlace
    };
    console.log(this.dataObject);
    this.commonService.postService(environment.baseUrl + 'addEmployeeData?' +
      'formSection=profileDetails&employeeToken=' +
      JSON.parse(localStorage.getItem('EmployeeToken')),
      this.dataObject)
      .subscribe(data => {
        console.log(data);
        this.commonService.getService(environment.baseUrl + 'verify/' +
          JSON.parse(localStorage.getItem('EmployeeToken')))
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
  // dataObject = JSON.parse(localStorage.getItem('profileData'));
  // for (let i = 0; i <= this.dataObject.academic.length; i++) {
  //   this.discipline = this.dataObject.academic[i].discipline;
  //   this.college = this.dataObject.academic[i].college;
  //   this.university = this.dataObject.academic[i].university;
  //   this.yearOfPassing = this.dataObject.academic[i].yearOfPassing;
  //   this.qualification = this.dataObject.academic[i].qualification;
  //   this.typeOfQualification = this.dataObject.academic[i].typeOfQualification;
  //   this.aggregatePercentage = this.dataObject.academic[i].aggregatePercentage;
  //   this.academics = [this.dataObject.academic[i].typeOfQualification];
  //   console.log(i);
  // }
  //  console.log(this.dataObject);
  // }
  // show() {
  //   if (JSON.parse(localStorage.getItem('inviteFormDetails')).profileDetails.training === false) {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }

  // AddQualification() {
  //   $('#extraQualification').show();
  //   this.dataObject.academic.push(1);
  //   // this.counter++;
  //   // this.quailifactionForm = this.counter;
  // }
  // HideQualification() {
  //   $('#extraQualification').hide();
  //   this.counter.pop();
  //   this.dataObject.academic.pop();

  // }
  // onSubmit(form: NgForm) {
  //   if (form.invalid) {
  //     return;
  //   }
  //   console.log(form.value);
  //   // console.log(JSON.parse(form.value.typeOfQualification));

  //   form.value.id = 'choice1';
  //   form.value.finalYearPercentageQualification = '';
  //   form.value.finalYearPercentage = '0';
  //   // console.log(form.value);
  //   this.dataObject = {
  //     'profileDetails': {
  //       'academic': [form.value],
  //       'training': [{
  //         'institute': form.value.institute,
  //         'duration': form.value.duration,
  //         'trainingIn': form.value.trainingIn,
  //         'location': form.value.location
  //       }],
  //     },
  //     'hiringCity': form.value.hiringCity,
  //     'hiringPlace': form.value.hiringPlace
  //   };
  //   this.commonService.postService(environment.baseUrl + 'addEmployeeData?' +
  //     'formSection=profileDetails&employeeToken=' +
  //     JSON.parse(localStorage.getItem('EmployeeToken')),
  //     this.dataObject)
  //     .subscribe(data => {
  //       console.log(data);
  //       this.commonService.getService(environment.baseUrl + 'verify/' +
  //         JSON.parse(localStorage.getItem('EmployeeToken')))
  //         .subscribe(data => {
  //           console.log(data.data);
  //           // console.log(data);
  //           if (data.data) {
  //             localStorage.setItem('profileData', JSON.stringify(data.data.profileDetails));
  //           }
  //         });
  //     });
  //   this.router.navigateByUrl('/personalData');

  // }
  previous() {
    this.location.back();

  }
}


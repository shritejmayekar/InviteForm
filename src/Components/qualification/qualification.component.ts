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
  qualifiactions = [
    { value: 'Diploma-0', viewValue: 'Diploma' },
    { value: 'Degree-1', viewValue: 'Degree' },
    { value: 'Master-2', viewValue: 'Master' },
  ];
  hiringCities = [
    { value: 'Bengalaru-0', viewValue: 'Bengalaru' },
    { value: 'Mumbai-1', viewValue: 'Mumabai' },
    { value: 'Delhi-2', viewValue: 'Delhi' }
  ];
  passingYear = [
    { value: '1991-0', viewValue: '1991' },
    { value: '1992-1', viewValue: '1992' },
    { value: '1993-2', viewValue: '1993' },
    { value: '1994-3', viewValue: '1994' },
    { value: '1995-4', viewValue: '1995' },
    { value: '1996-5', viewValue: '1996' },
    { value: '1997-6', viewValue: '1997' },
    { value: '1998-7', viewValue: '1998' },
    { value: '1999-8', viewValue: '1999' },
    { value: '2000-9', viewValue: '2000' }
  ];
  constructor(private router: Router, private location: Location, private commonService: DataService) { }
  ngOnInit() {
    $('#extraQualification').hide();

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
    console.log();
    localStorage.setItem('profileDetails', JSON.stringify(form.value));
  //   this.dataObject = {
  //     'profileDetails': {

  //       'academic': [{
  //         form.value
  //       },
  //       ]
  //   }
  // };
    this.commonService.postService(environment.baseUrl + 'addEmployeeData?' + 'formSection=profileDetails&employeeToken=ab6ecd',
      this.dataObject)
      .subscribe(data => {
        console.log(data);
      });

    this.router.navigateByUrl('/personalData');

  }
  previous() {
    this.location.back();

  }
}


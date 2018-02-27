import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { DataService } from '../app/data.service';
import { environment } from '../environments/environment';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class FormsService {
  private subject = new Subject<any>();

  constructor(private commonService: DataService) { }

  // public loadLocalData(): Observable<any> {
  //   console.log(JSON.parse(localStorage.getItem('employeeDetails')));
  //   return JSON.parse(localStorage.getItem('employeeDetails'));
  //     // .map(res => res.json());
  // }
  /***********************************
   * Get All config data from server
   ***********************************/
  getCongfigData() {
    this.commonService.getService(environment.baseUrl + 'readConfig?configType=all')
      .subscribe(data => {
        console.log(data);
        localStorage.setItem('configData', JSON.stringify(data.data));
        localStorage.setItem('cityData', JSON.stringify(data.data.cityData));

      });
    this.commonService.getService(environment.baseUrl + 'verify/' + JSON.parse(localStorage.getItem('EmployeeToken')))
      // this.commonService.getService(environment.baseUrl + 'verify/')

      .subscribe(data => {
        console.log(data);
        if (data.data) {
          localStorage.setItem('bankDetails', JSON.stringify(data.data.bankDetails));
          localStorage.setItem('employeeDetails', JSON.stringify(data.data.employeeDetails));
          localStorage.setItem('employeeObjectId', JSON.stringify(data.data.employeeObjectId));
          localStorage.setItem('inviteFormDetails', JSON.stringify(data.data.inviteFormDetails));
          localStorage.setItem('personalDetails', JSON.stringify(data.data.personalDetails));
          localStorage.setItem('profileData', JSON.stringify(data.data.profileDetails));
          localStorage.setItem('profileDetails', JSON.stringify(data.data.profileDetails));
          localStorage.setItem('profileImageDetails', JSON.stringify(data.data.profileImageDetails));
        }
      });
  }




}

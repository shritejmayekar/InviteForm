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
  }




}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class DataService {
  result: any;


  constructor(private http: HttpClient) { }

  postService(url: string, data: string) {
    console.log(url + '\n' + data);
    // return this.http.post('login',data).map(res=>res.json());
    return this.http.post(url, data)
      .map(res => res);
  }
  getService(url: string) {
    return this.http.get(url)
      .map(res => res);
  }
}

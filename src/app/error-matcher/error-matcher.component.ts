import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-error-matcher',
  templateUrl: './error-matcher.component.html',
  styleUrls: ['./error-matcher.component.scss']
})
export class ErrorMatcherComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

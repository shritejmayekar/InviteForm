import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, NgForm } from '@angular/forms';

import { Router } from '@angular/router';

@Component({
  selector: 'app-bank-information',
  templateUrl: './bank-information.component.html',
  styleUrls: ['./bank-information.component.scss']
})
export class BankInformationComponent implements OnInit {


  constructor(private router: Router) { }
  panNumber = new FormControl('', [Validators.required, Validators.pattern('text')]);
  aadharId =  new FormControl('', [Validators.required, Validators.maxLength(12)]);
  bankName =  new FormControl('', Validators.required);
  accountName = new FormControl('', Validators.required);
  getError () {
    return this.panNumber.hasError('required') ? 'Please enter PAN no.' :
      this.panNumber.hasError('pattern') ? 'Please enter valid PAN no.' :
      '';
  }
  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    console.log(form.value);
    localStorage.setItem('bankDetails', JSON.stringify(form.value));
    this.router.navigateByUrl('/qualification');

  }

}

import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { FormControl, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.scss']
})
export class AddemployeeComponent implements OnInit {
  cities: any;
  constructor() { }

  ngOnInit() {
    this.cities = JSON.parse(localStorage.getItem('configData')).cityData;
  } displayedColumns = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    console.log(form.value);

  }
}

export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: Element[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
];

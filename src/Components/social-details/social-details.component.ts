import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-details',
  templateUrl: './social-details.component.html',
  styleUrls: ['./social-details.component.scss']
})
export class SocialDetailsComponent implements OnInit {
  card: any ;
  constructor() { }

  ngOnInit() {
    this.card = [1, 2, 3, 4, 5, 6];
  }

}

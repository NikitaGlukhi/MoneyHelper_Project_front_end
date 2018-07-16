import { Component, OnInit } from '@angular/core';
import { AppLinksService } from '../services/app.links.service';

@Component({
  selector: 'app-add-date-money',
  templateUrl: './add-date-money.component.html',
  styleUrls: ['./add-date-money.component.css']
})
export class AddDateMoneyComponent implements OnInit {

  constructor(public nav: AppLinksService) { }

  ngOnInit() {

  }

}

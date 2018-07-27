import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-date-money',
  templateUrl: './add-date-money.component.html',
  styleUrls: ['./add-date-money.component.css']
})
export class AddDateMoneyComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

  }

}

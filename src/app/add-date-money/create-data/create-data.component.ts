import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { AppLinksService } from '../../services/app.links.service';

@Component({
  selector: 'app-create-data',
  templateUrl: './create-data.component.html',
  styleUrls: ['./create-data.component.css']
})
export class CreateDataComponent implements OnInit {

  formGroup: FormGroup;

  constructor
  (
    private route: ActivatedRoute,
    private router: Router,
    private nav: AppLinksService
  ) {  }

  ngOnInit() {
    this.nav.hide();
    this.formGroup = new FormGroup({
      Date: new FormControl('', [
        Validators.required
      ]),
      Money: new FormControl('', [
        Validators.required
      ])
    });
  }

  updateData() {
    // this.router.navigate(['/']);
  }

  onSubmit() {
    console.log(this.formGroup);
  }

  onReset() {
    this.formGroup.reset();
  }

}

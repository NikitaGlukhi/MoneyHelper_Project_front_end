import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-communal-waste',
  templateUrl: './communal-waste.component.html',
  styleUrls: ['./communal-waste.component.css']
})
export class CommunalWasteComponent implements OnInit {

  formGroup: FormGroup;

  constructor() { }

  ngOnInit() {
    this.formGroup = new FormGroup({
      communalData: new FormControl('', Validators.required)
    })
  }

  onSubmit2() {
    console.log(this.formGroup)
  }

}

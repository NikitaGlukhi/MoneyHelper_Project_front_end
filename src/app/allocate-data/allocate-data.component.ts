import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-allocate-data',
  templateUrl: './allocate-data.component.html',
  styleUrls: ['./allocate-data.component.css']
})
export class AllocateDataComponent implements OnInit {

  formGroup: FormGroup;

  constructor() { }

  ngOnInit() {
    this.formGroup = new FormGroup({
      Food: new FormControl('', Validators.required),
      Communal: new FormControl('', Validators.required),
      Transport: new FormControl('', Validators.required)
    })
  }

  onSubmit() {
    console.log(this.formGroup);
  }

  onReset() {
    this.formGroup.reset();
  }

}

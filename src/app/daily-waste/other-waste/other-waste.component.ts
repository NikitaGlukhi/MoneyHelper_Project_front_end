import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-other-waste',
  templateUrl: './other-waste.component.html',
  styleUrls: ['./other-waste.component.css']
})
export class OtherWasteComponent implements OnInit {

  formGroup: FormGroup;

  constructor() { }

  ngOnInit() {
    this.formGroup = new FormGroup({
      otherData: new FormControl('', Validators.required)
    })
  }

  onSubmit4() {
    console.log(this.formGroup)
  }

}

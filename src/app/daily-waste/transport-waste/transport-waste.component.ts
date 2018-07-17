import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-transport-waste',
  templateUrl: './transport-waste.component.html',
  styleUrls: ['./transport-waste.component.css']
})
export class TransportWasteComponent implements OnInit {

  formGroup: FormGroup;

  constructor() { }

  ngOnInit() {
    this.formGroup = new FormGroup({
      transportData: new FormControl('', Validators.required)
    })
  }

  onSubmit3() {
    console.log(this.formGroup);
  }

}

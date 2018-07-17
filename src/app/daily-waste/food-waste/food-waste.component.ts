import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-food-waste',
  templateUrl: './food-waste.component.html',
  styleUrls: ['./food-waste.component.css']
})
export class FoodWasteComponent implements OnInit {

  formGroup: FormGroup;

  constructor() { }

  ngOnInit() {
    this.formGroup = new FormGroup({
      foodData: new FormControl('', Validators.required)
    })
  }

  onSubmit1() {
    console.log(this.formGroup);
  }

}

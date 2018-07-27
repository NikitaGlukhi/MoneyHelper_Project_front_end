import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-update-data',
  templateUrl: './update-data.component.html',
  styleUrls: ['./update-data.component.css']
})
export class UpdateDataComponent implements OnInit {

  formGroup: FormGroup;

  constructor
  (
    private route: ActivatedRoute,
    private router: Router
  ) {  }

  ngOnInit() {
    this.formGroup = new FormGroup({
      Date: new FormControl('', [
        Validators.required
      ]),
      Money: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20)
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

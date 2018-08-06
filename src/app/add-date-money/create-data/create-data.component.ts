import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppSetInitialDataService } from '../../services/app.set_initial_data.service';
import { AppTransferDataService } from '../../services/app.transfer-data.service';

@Component({
  selector: 'app-create-data',
  templateUrl: './create-data.component.html',
  styleUrls: ['./create-data.component.css']
})
export class CreateDataComponent implements OnInit {

  formGroup: FormGroup;
  date: string;
  amount: number;

  constructor
  (
    private route: ActivatedRoute,
    private router: Router,
    private setData: AppSetInitialDataService,
    private setTransfer: AppTransferDataService
  ) {  }

  ngOnInit() {
    this.formGroup = new FormGroup({
      Date: new FormControl('', [
        Validators.required
      ]),
      Money: new FormControl('', [
        Validators.required
      ])
    });
  }

  onSubmit() {
    console.log(this.formGroup);
    console.log(this.amount, this.date);
    if(this.amount < 0) {
      alert('Ошибка!');
      return false;
    } else {
      this.setData.setInitialData({all_date: this.date, all_amount: this.amount})
        .subscribe(res => {
          this.setTransfer.setData(res);
          this.setTransfer.setDataAmount(this.amount);
          this.router.navigateByUrl('/allocate-data')
        }, err => {
          console.error(err);
        })
    }
  }


  onReset() {
    this.formGroup.reset();
  }

}

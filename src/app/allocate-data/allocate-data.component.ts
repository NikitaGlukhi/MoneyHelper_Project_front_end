import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AppTransferDataService } from '../services/app.transfer-data.service';
import { AppDistributionDataService } from '../services/app.distribution_data.service';
import { AllocateDataModel } from '../models/allocate_data_model';

@Component({
  selector: 'app-allocate-data',
  templateUrl: './allocate-data.component.html',
  styleUrls: ['./allocate-data.component.css']
})

export class AllocateDataComponent implements OnInit {

  formGroup: FormGroup;
  food: number;
  communal: number;
  transport: number;
  other: number;
  allocate: any = {};

  constructor
  (
    private route: ActivatedRoute,
    private router: Router,
    private setTransfer: AppTransferDataService,
    private dis: AppDistributionDataService
  ) { }

  data = this.setTransfer.getData();
  amount  = this.setTransfer.getAmountData();

  ngOnInit() {
    this.formGroup = new FormGroup({
      Food: new FormControl('', Validators.required),
      Communal: new FormControl('', Validators.required),
      Transport: new FormControl('', Validators.required)
    })
  }

  onCalculate() {
    this.other = this.amount - (this.food + this.communal + this.transport);
    this.dis.addDistributedData({ initial_id: this.data, all_food: this.food, all_communal: this.communal, all_transport: this.transport, all_other: this.other }).subscribe(res => {
        this.allocate = res;
        console.log('Returned: ', this.allocate);
        this.router.navigateByUrl('/main-page');
    }, err => {
        console.error(err);
    })
  }

  onSubmit() {
    console.log(this.formGroup);
  }

  onReset() {
    this.formGroup.reset();
  }

}

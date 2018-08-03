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
    console.log(this.data);
    this.other = this.amount - (this.food + this.communal + this.transport);
    this.dis.addFoodAmount({all_food_amount: this.food, all_remainder: this.food})
      .subscribe(res => {
        console.log('Food amount: ', res);
      }, err => {
        console.error(err);
      });
    this.dis.addCommunalAmount({all_communal_amount: this.communal, all_communal_remainder: this.communal})
      .subscribe(res => {
        console.log('Communal amount: ', res);
      }, err => {
        console.error(err);
      });
    this.dis.addTransportAmount({all_transport_amount: this.transport, all_transport_remainder: this.transport})
      .subscribe(res => {
        console.log('Transport amount: ', res);
      }, err => {
        console.error(err);
      });
    this.dis.addOtherAmount({all_other_amount: this.other, all_other_reminder: this.other})
      .subscribe(res => {
        console.log('Other amount: ', res);
      }, err => {
        console.error(err);
      })
    setTimeout(() => this.dis.addDistributedData({ initial_id: this.data, all_food: this.food, all_communal: this.communal, all_transport: this.transport, all_other: this.other }).subscribe(res => {
        this.allocate = res;
        console.log('Returned: ', this.allocate);
        this.router.navigateByUrl('/main-page');
    }, err => {
        console.error(err);
    }), 5000);
  }

  onSubmit() {
    console.log(this.formGroup);
  }

  onReset() {
    this.formGroup.reset();
  }

}

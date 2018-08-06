import { Component, OnInit } from '@angular/core';
import { AppDistributionDataService } from '../services/app.distribution_data.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './app.mainpage.component.html',
  styleUrls: ['./app.mainpage.component.css']
})
export class AppMainPageComponent implements OnInit {

  foodData: any = [];
  foodAll: any = [];
  communalData: any = [];
  communalAll: any = [];
  transportData: any = [];
  transportAll: any = [];
  otherData: any = [];
  otherAll: any = [];
  percent: number;
  percentData: number;
  communal_percent: number;
  communal_percentData: number;
  transport_percent: number;
  transport_percentData: number;
  other_percent: number;
  other_percentData: number;

  constructor(private dis: AppDistributionDataService) { }

  ngOnInit() {
    this.dis.getDistributedFoodData()
      .subscribe(res => {
        if(res[0].food_amount == 0) {
          this.percentData = 0;
        } else {
          this.foodData = res[0].total_waste;
          this.foodAll = res[0].food_amount;
          this.percent = (this.foodData / this.foodAll) * 100;
          this.percentData = Math.round(this.percent);
        }
        console.log('Food: ', this.percentData, '%');
      }, err => {
        console.error(err);
      });
    this.dis.getDistributedCommunalData()
      .subscribe(res1 => {
        if(res1[0].communal_amount == 0) {
          this.communal_percentData = 0;
        } else {
          this.communalAll = res1[0].communal_amount;
          this.communalData = res1[0].total_waste;
          this.communal_percent = (this.communalData / this.communalAll) * 100;
          this.communal_percentData = Math.round(this.communal_percent);
        }
        console.log('Communal: ', this.communal_percentData, '%');
      }, err1 => {
        console.error(err1);
      });
    this.dis.getDistributedTransportData()
      .subscribe(res2 => {
        if(res2[0].transport_amount == 0) {
          this.transport_percentData = 0;
        } else {
          this.transportAll = res2[0].transport_amount;
          this.transportData = res2[0].total_waste;
          this.transport_percent = (this.transportData / this.transportAll) * 100;
          this.transport_percentData = Math.round(this.transport_percent);
        }
        console.log('Transport:', this.transport_percentData, '%');
      }, err2 => {
        console.error(err2);
      });
    this.dis.getDistributedOtherData()
      .subscribe(res3 => {
        if(res3[0].other_amount == 0) {
          this.other_percentData = 0;
        } else {
          this.otherAll = res3[0].other_amount;
          this.otherData = res3[0].total_waste;
          this.other_percent = (this.otherData / this.otherAll) * 100;
          this.other_percentData = Math.round(this.other_percent);
        }
        console.log('Other: ', this.other_percentData, '%');
      }, err3 => {
        console.error(err3);
      })
  }

}

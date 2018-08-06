import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppDistributionDataService } from '../../services/app.distribution_data.service';

@Component({
  selector: 'app-communal-waste',
  templateUrl: './communal-waste.component.html',
  styleUrls: ['./communal-waste.component.css']
})
export class CommunalWasteComponent implements OnInit {

  communal_amount: number;
  daily_waste: number;
  total_waste: number;
  upd_total_waste: number;
  remainder: number;
  upd_remainder: number

  constructor(private router: Router, private route: ActivatedRoute, private dis: AppDistributionDataService) { }

  ngOnInit() {
    this.dis.getDistributedCommunalData()
      .subscribe(res => {
        this.communal_amount = res[0].communal_amount;
        this.total_waste = res[0].total_waste;
        this.remainder = res[0].remainder;
        console.log(res);
      },err => {
        console.error(err);
      })
  }

  onSubmit() {
    this.upd_total_waste = this.total_waste + this.daily_waste;
    this.upd_remainder = this.remainder - this.daily_waste;
    this.dis.addDailyWasteCommunalChanges({
      all_upd_communal_amount: this.communal_amount,
      all_upd_communal_daily_waste: this.daily_waste,
      all_upd_communal_total_waste: this.upd_total_waste,
      all_upd_communal_remainder: this.upd_remainder})
      .subscribe(res => {
        alert('Успех!');
        console.log(res);
        this.router.navigateByUrl('/daily-waste/transport-waste');
      }, err => {
        console.error(err);
      })
  }

}

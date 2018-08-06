import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppDistributionDataService } from '../../services/app.distribution_data.service';

@Component({
  selector: 'app-transport-waste',
  templateUrl: './transport-waste.component.html',
  styleUrls: ['./transport-waste.component.css']
})
export class TransportWasteComponent implements OnInit {

  transport_amount: number;
  daily_waste: number;
  total_waste: number;
  upd_total_waste: number;
  remainder: number;
  upd_remainder: number;

  constructor(private router: Router, private route: ActivatedRoute, private dis: AppDistributionDataService) { }

  ngOnInit() {
    this.dis.getDistributedTransportData()
      .subscribe(res => {
        this.transport_amount = res[0].transport_amount;
        this.total_waste = res[0].total_waste;
        this.remainder = res[0].remainder;
        console.log('Transport: ', res)
      }, err => {
        console.error(err);
      })
  }

  onSubmit() {
    this.upd_total_waste = this.total_waste + this.daily_waste;
    this.upd_remainder = this.remainder - this.daily_waste;
    this.dis.addDailyWasteTransportData({
      all_upd_transport_amount: this.transport_amount,
      all_upd_transport_daily_waste: this.daily_waste,
      all_upd_transport_total_waste: this.upd_total_waste,
      all_upd_transport_remainder: this.upd_remainder})
      .subscribe(res => {
      alert('Успех!');
      console.log(res);
      this.router.navigateByUrl('/daily-waste/other-waste');
    }, err => {
      console.error(err);
    })
  }

}

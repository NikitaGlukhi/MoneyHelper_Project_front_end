import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppDistributionDataService } from '../../services/app.distribution_data.service';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-other-waste',
  templateUrl: './other-waste.component.html',
  styleUrls: ['./other-waste.component.css']
})
export class OtherWasteComponent implements OnInit {

  form = new FormGroup({});
  model = { daily_waste: null };
  other_amount: number;
  total_waste: number;
  upd_total_waste: number;
  remainder: number;
  upd_remainder: number;
  fields: FormlyFieldConfig[] = [
    {
      key: 'daily_waste',
      type: 'input',
      templateOptions: {
        type: 'number',
        label: 'Введите сумму',
        placeholder: 'Сколько вы потратили за сегодня?',
        required: true
      }
    }
    ]

  constructor(private router: Router, private route: ActivatedRoute, private dis: AppDistributionDataService) {  }

  ngOnInit() {
    this.dis.getDistributedOtherData()
      .subscribe(res => {
        this.other_amount = res[0].other_amount;
        this.total_waste = res[0].total_waste;
        this.remainder = res[0].remainder;
        console.log(res);
      }, err => {
        console.error(err);
      })
  }

  onSubmit() {
    this.upd_total_waste = this.total_waste + this.model.daily_waste;
    this.upd_remainder = this.remainder - this.model.daily_waste;
    this.dis.addDailyWasteOtherData({
      all_upd_other_amount: this.other_amount,
      all_upd_other_daily_waste: this.model.daily_waste,
      all_upd_other_total_waste: this.upd_total_waste,
      all_upd_other_remainder: this.upd_remainder}).subscribe(res => {
      alert('Успех!');
      console.log(res);
      this.router.navigateByUrl('/main-page');
      }, err => {
        console.error(err);
      })
  }

}

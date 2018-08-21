import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppDailyWasteService } from '../../services/app.daily-waste.service';
import { AppDistributionDataService } from '../../services/app.distribution_data.service';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import {assertNumber} from "@angular/core/src/render3/assert";

@Component({
  selector: 'app-food-waste',
  templateUrl: './food-waste.component.html',
  styleUrls: ['./food-waste.component.css']
})

export class FoodWasteComponent implements OnInit {

  form = new FormGroup({});
  model = { daily_waste: null };
  food_amount: number;
  total_waste: number;
  upd_total_waste: number;
  remainder: number;
  upd_remainder: number;
  fields: FormlyFieldConfig[] = [
    {
      key: 'daily_waste',
      type: 'add-amount',
      templateOptions: {
        label: 'Введите сумму',
        placeholder: 'Сколько вы потратили за сегодня?',
        required: true
      }
    }
    ]

  constructor(private router: Router, private route: ActivatedRoute, private dis: AppDistributionDataService) { }

  ngOnInit() {
    this.dis.getDistributedFoodData()
      .subscribe(res => {
        this.food_amount = res[0].food_amount;
        this.total_waste = res[0].total_waste;
        this.remainder = res[0].remainder;
      })
  }

  onSubmit(model) {
    this.upd_total_waste = this.total_waste + this.model.daily_waste;
    this.upd_remainder = this.remainder - this.model.daily_waste;
    this.dis.addDailyWasteFoodChanges({all_upd_food_amount: this.food_amount, all_upd_daily_waste: this.model.daily_waste, all_upd_total_waste: this.upd_total_waste, all_upd_remainder: this.upd_remainder
    })
      .subscribe(res => {
        alert('Успех!');
        this.router.navigateByUrl('/daily-waste/communal-waste');
        console.log(res);
      }, err => {
        console.error(err);
      })
  }

}

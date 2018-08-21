import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppDistributionDataService } from '../../services/app.distribution_data.service';
import { AppTransferDataService } from '../../services/app.transfer-data.service';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-allocate-data-percentage',
  templateUrl: './allocate-data-percentage.component.html',
  styleUrls: ['./allocate-data-percentage.component.css']
})
export class AllocateDataPercentageComponent implements OnInit {

  form = new FormGroup({});
  model = { food_per: null, communal_per: null, transport_per: null, other: null }
  food: number;
  food_c: number;
  communal: number;
  communal_c: number;
  transport: number;
  transport_c: number;
  fields: FormlyFieldConfig[] = [
    {
      key: 'food_per',
      type: 'add-amount',
      templateOptions: {
        label: 'Еда',
        placeholder: 'Еда(%)',
        required: true
      },
    },
    {
      key: 'communal_per',
      type: 'add-amount',
      templateOptions: {
        label: 'Бытовуха',
        placeholder: 'Бытовуха(%)',
        required: true
      },
      hideExpression: '!model.food_per'
    },
    {
      key: 'transport_per',
      type: 'add-amount',
      templateOptions: {
        label: 'Транспорт',
        placeholder: 'Транспорт(%)',
        required: true
      },
      hideExpression: '!model.communal_per'
    }
  ]

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dis: AppDistributionDataService,
    private transfer: AppTransferDataService
  ) { }

  id = this.transfer.getData();
  amount = this.transfer.getAmountData();

  ngOnInit() {}

  onCalculate() {
    if (!this.form.valid) {
      return false
    } else {
      if (this.model.food_per > 100 || this.model.communal_per > 100 || this.model.transport_per > 100) {
        alert('Вы не можете взять больше 100% от исходной суммы');
      } else if (this.model.food_per < 0 || this.model.communal_per < 0 || this.model.transport_per < 0) {
        alert('Вы не можете взять меньше 0% от исходной суммы');
      } else {
        this.food_c = (this.amount * this.model.food_per) / 100;
        this.food = Math.round(this.food_c);
        this.communal_c = (this.amount * this.model.communal_per) / 100;
        this.communal = Math.round(this.communal_c);
        this.transport_c = (this.amount * this.model.transport_per) / 100;
        this.transport = Math.round(this.transport_c);
        this.model.other = this.amount - (this.food + this.communal + this.transport)
        if (this.model.other < 0) {
          alert('Превышена заданная сумма проверьте введённые Вами данные');
          return false;
        } else {
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
          this.dis.addOtherAmount({all_other_amount: this.model.other, all_other_reminder: this.model.other})
            .subscribe(res => {
              console.log('Other amount: ', res);
            }, err => {
              console.error(err);
            });
          setTimeout(() => this.dis.addDistributedData({
            initial_id: this.id,
            all_food: this.food,
            all_communal: this.communal,
            all_transport: this.transport,
            all_other: this.model.other
          }).subscribe(res => {
            console.log('Distributed data: ', res);
            this.router.navigateByUrl('/main-page');
          }, err => {
            console.error(err);
          }), 5000);
        }
      }
    }
  }
}

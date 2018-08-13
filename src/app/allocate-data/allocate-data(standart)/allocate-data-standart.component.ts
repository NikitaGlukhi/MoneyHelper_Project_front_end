import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AppTransferDataService } from '../../services/app.transfer-data.service';
import { AppDistributionDataService } from '../../services/app.distribution_data.service';
import { AllocateDataModel } from '../../models/allocate_data_model';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-allocate-data-standart',
  templateUrl: './allocate-data-standart.component.html',
  styleUrls: ['./allocate-data-standart.component.css']
})

export class AllocateDataStandartComponent implements OnInit {

  form = new FormGroup({});
  model = { food: null, communal: null, transport: null, other: null };
  fields: FormlyFieldConfig[] = [
    {
      key: 'food',
      type: 'input',
      templateOptions: {
        type: 'number',
        label: 'Еда',
        placeholder: 'Еда(грн)',
        required: true,
      }
    },
    {
      key: 'communal',
      type: 'input',
      templateOptions: {
        type: 'number',
        label: 'Бытовуха',
        placeholder: 'Бытовуха(грн)',
        required: true
      },
      hideExpression: '!model.food'
    },
    {
      key: 'transport',
      type: 'input',
      templateOptions: {
        type: 'number',
        label: 'Транспорт',
        placeholder: 'Транспорт(грн)',
        required: true,
      },
      hideExpression: '!model.communal'
    }
    ]
  allocate: any = {};

  constructor
  (
    private route: ActivatedRoute,
    private router: Router,
    private setTransfer: AppTransferDataService,
    private dis: AppDistributionDataService
  ) { }

  data = this.setTransfer.getData();
  amount = this.setTransfer.getAmountData();

  ngOnInit() {}

  onCalculate() {
    this.model.other = this.amount - (this.model.food + this.model.communal + this.model.transport);
    if((this.model.food + this.model.communal + this.model.transport) > this.amount) {
      alert('Превышение заданной суммы. Введите данные заново');
      return false;
    } else if(this.model.food < 0 || this.model.communal < 0 || this.model.transport < 0) {
      alert('Невозможно ввести указанные данные(отрицательные числа). Введите данные заново');
      return true;
    } else {
      this.dis.addFoodAmount({all_food_amount: this.model.food, all_remainder: this.model.food})
        .subscribe(res => {
          console.log('Food amount: ', res);
        }, err => {
          console.error(err);
        });
      this.dis.addCommunalAmount({all_communal_amount: this.model.communal, all_communal_remainder: this.model.communal})
        .subscribe(res => {
          console.log('Communal amount: ', res);
        }, err => {
          console.error(err);
        });
      this.dis.addTransportAmount({all_transport_amount: this.model.transport, all_transport_remainder: this.model.transport})
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
        })
      setTimeout(() => this.dis.addDistributedData({
        initial_id: this.data,
        all_food: this.model.food,
        all_communal: this.model.communal,
        all_transport: this.model.transport,
        all_other: this.model.other
      }).subscribe(res => {
        this.allocate = res;
        console.log('Returned: ', this.allocate);
        this.router.navigateByUrl('/main-page');
      }, err => {
        console.error(err);
      }), 5000);
    }
  }

}

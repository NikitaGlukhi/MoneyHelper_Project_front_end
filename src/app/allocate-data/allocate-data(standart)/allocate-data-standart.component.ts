import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AppTransferDataService } from '../../services/app.transfer-data.service';
import { AppSetInitialDataService } from '../../services/app.set_initial_data.service';
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
  model = { food: null, communal: null, transport: null };
  fields: FormlyFieldConfig[] = [
    {
      key: 'food',
      type: 'add-amount',
      templateOptions: {
        label: 'Еда',
        placeholder: 'Еда(грн)',
        required: true
      }
    },
    {
      key: 'communal',
      type: 'add-amount',
      templateOptions: {
        label: 'Бытовуха',
        placeholder: 'Бытовуха(грн)',
        required: true
      }
    },
    {
      key: 'transport',
      type: 'add-amount',
      templateOptions: {
        label: 'Транспорт',
        placeholder: 'Транспорт(грн)',
        required: true,
      }
    }
  ]
  allocate: any = {};
  current_amount: number;
  title: string;
  title1: string;
  other: number;
  remainder_amount: number = 0;

  constructor
  (
    private route: ActivatedRoute,
    private router: Router,
    private setTransfer: AppTransferDataService,
    private dis: AppDistributionDataService,
    private initial: AppSetInitialDataService
  ) { }

  data = this.setTransfer.getData();

  ngOnInit() {
    this.initial.getInitialAmount()
      .subscribe(res => {
        this.current_amount = res[0].amount;
        this.other = this.current_amount;
      }, err => {
        console.error(err)
      });
    this.calculateRemainderAmount();
    this.check();
    this.check1();
  }

  calculateRemainderAmount() {
    this.form.valueChanges.subscribe(val => {
      this.model = val;

      let AllSum = val.food + val.communal + val.transport;

      return this.remainder_amount = this.current_amount - AllSum;
    })
  }

  check() {
    this.form.valueChanges.subscribe(val => {
      this.model = val;
      let checkData = val.food + val.communal + val.transport;

      if (checkData > this.current_amount) {
        return this.title = 'Превышение заданной суммы, проверьте данные'
      }

      return this.title = ''

    })
  };

  check1() {
    this.form.valueChanges.subscribe(val => {
      this.model = val;
      const checkSpecialData = val.food < 0 || val.communal < 0 || val.transport < 0;

      if(checkSpecialData) {
        return this.title1 = 'Отрицательная сумма! Проверьте введенные данные.'
      }

      return this.title1 = ''
    })
  }

  onCalculate() {
    this.dis.setAfterDistributedData({after_amount: 0})
      .subscribe(res => {
        console.log(res);
      }, err => {
        console.error(err);
      });
    let calculate_sum = this.model.food + this.model.communal + this.model.transport;
    this.other = this.current_amount - calculate_sum;
        this.dis.addFoodAmount({
          all_food_amount: this.model.food,
          all_remainder: this.model.food})
          .subscribe(res => {
            console.log('Food amount: ', res);
          }, err => {
            console.error(err);
          });
        this.dis.addCommunalAmount({
          all_communal_amount: this.model.communal,
          all_communal_remainder: this.model.communal
        })
          .subscribe(res => {
            console.log('Communal amount: ', res);
          }, err => {
            console.error(err);
          });
        this.dis.addTransportAmount({
          all_transport_amount: this.model.transport,
          all_transport_remainder: this.model.transport
        })
          .subscribe(res => {
            console.log('Transport amount: ', res);
          }, err => {
            console.error(err);
          });
        this.dis.addOtherAmount({
          all_other_amount: this.other,
          all_other_reminder: this.other})
          .subscribe(res => {
            console.log('Other amount: ', res);
          }, err => {
            console.error(err);
          })
        this.dis.addDistributedData({
          initial_id: this.data,
          all_food: this.model.food,
          all_communal: this.model.communal,
          all_transport: this.model.transport,
          all_other: this.other
        }).subscribe(res => {
          console.log('id: ', res.initial_id)
          this.allocate = res;
          console.log('Returned: ', this.allocate);
          this.router.navigateByUrl('/main-page');
        }, err => {
          console.error(err);
        })
      }
}

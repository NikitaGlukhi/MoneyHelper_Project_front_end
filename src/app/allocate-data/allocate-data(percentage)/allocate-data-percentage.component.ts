import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppDistributionDataService } from '../../services/app.distribution_data.service';
import { AppTransferDataService } from '../../services/app.transfer-data.service';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { AppSetInitialDataService } from '../../services/app.set_initial_data.service';

@Component({
  selector: 'app-allocate-data-percentage',
  templateUrl: './allocate-data-percentage.component.html',
  styleUrls: ['./allocate-data-percentage.component.css']
})
export class AllocateDataPercentageComponent implements OnInit {

  food: number = 0;
  food_c: number = 0;
  food_d: number = 0;
  communal: number = 0;
  communal_c: number = 0;
  communal_d: number = 0;
  transport: number = 0;
  transport_c: number = 0;
  transport_d: number = 0;
  other_d: number = 0;
  title: string;

  form = new FormGroup({});
  model = { food_per: null, communal_per: null, transport_per: null, other: null }
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
        label: `Бытовуха`,
        placeholder: 'Бытовуха(%)',
        required: true
      }
    },
    {
      key: 'transport_per',
      type: 'add-amount',
      templateOptions: {
        label: `Транспорт `,
        placeholder: 'Транспорт(%)',
        required: true
      }
    }
  ]

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dis: AppDistributionDataService,
    private initial: AppSetInitialDataService,
    private transfer: AppTransferDataService
  ) { }

  id = this.transfer.getData();
  amount: number = 0;

  ngOnInit() {
    this.initial.getInitialAmount()
      .subscribe(res => {
        this.amount = res[0].amount;
      }, err => {
        console.error(err);
      });
    this.check();
  }

  check() {
    this.form.valueChanges.subscribe(val => {
      this.model = val;
      let more = val.food_per > 100 || val.communal > 100 || val.transport > 100;
      let less = val.food_per < 0 || val.communal < 0 || val.transport < 0;
      let food_c = (this.amount * val.food_per) / 100
      let communal_c = (this.amount * val.communal_per) / 100;
      let transport_c = (this.amount * val.transport_per) / 100;
      let food_f = Math.round(food_c);
      let communal_f = Math.round(communal_c);
      let transport_f = Math.round(transport_c);

      this.food_d = food_f
      this.communal_d = communal_f
      this.transport_d = transport_f

      let sum = food_f + communal_f + transport_f;

      this.other_d = this.amount - sum;

      if(more) {
        return this.title = 'Вы не можете взять больше 100% от исходной суммы'
      } else if(less) {
        return this.title = 'Вы не можете взять меньше 0% от исходной суммы'
      } else if(sum > this.amount) {
        return this.title = 'Превышение заданной суммы. Проверьте данные'
      }
      return this.title = ''
    })
  }

  onCalculate() {
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

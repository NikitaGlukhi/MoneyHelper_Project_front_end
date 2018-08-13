import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppSetInitialDataService } from '../../services/app.set_initial_data.service';
import { AppTransferDataService } from '../../services/app.transfer-data.service';
import { padNumber, toNumber } from "ngx-bootstrap/timepicker/timepicker.utils";
import { FormGroup } from "@angular/forms";
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-create-data',
  templateUrl: './create-data.component.html',
  styleUrls: ['./create-data.component.css']
})
export class CreateDataComponent implements OnInit {

  form = new FormGroup({});
  model = { amount: null, date: null };
  fields: FormlyFieldConfig[] = [{
    key: 'amount',
    type: 'input',
    templateOptions: {
      type: 'number',
      label: 'Введите исходную сумму',
      placeholder: 'Исходная сумма(грн)',
      required: true
    }
  },
    {
      key: 'date',
      type: 'input',
      templateOptions: {
        type: 'date',
        label: 'Задать исходную дату',
        description: 'ВАЖНО! Доступ у этому полю становится доступен после заполнения предыдущего поля',
        required: true
      },
      expressionProperties: {
        'templateOptions.disabled': '!model.amount'
      }
    }]

  constructor
  (
    private route: ActivatedRoute,
    private router: Router,
    private setData: AppSetInitialDataService,
    private setTransfer: AppTransferDataService
  ) {  }

  ngOnInit() {}


  onSubmit(model) {
    if(isNaN(this.model.amount)) {
     alert('Необходимо ввести число!');
     return false;
    } else {
      if (this.model.amount < 0) {
        alert('Ошибка! Введенная сумма не может быть ментше 0.');
        return false;
      } else {
        this.setData.setInitialData({all_date: this.model.date, all_amount: this.model.amount})
          .subscribe(res => {
            this.setTransfer.setData(res);
            this.setTransfer.setDataAmount(this.model.amount);
            this.router.navigateByUrl('/allocate-data/standard')
          }, err => {
            console.error(err);
          })
      }
    }
  }

}

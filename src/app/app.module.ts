import { BrowserModule } from '@angular/platform-browser';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NgBootstrapFormValidationModule } from 'ng-bootstrap-form-validation';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';

import { AppSetInitialDataService } from './services/app.set_initial_data.service';
import { AppTransferDataService } from './services/app.transfer-data.service';
import { AppDistributionDataService } from './services/app.distribution_data.service';
import { AppDailyWasteService } from './services/app.daily-waste.service';

import { routes } from './app.routing';
import { AppComponent } from './app.component/app.component';
import { AppMainPageComponent } from './mainpage/app.mainpage.component';
import { CreateDataComponent } from './add-date-money/create-data/create-data.component';
import { UpdateDataComponent } from './add-date-money/update-data/update-data.component';
import { AddDateMoneyComponent } from './add-date-money/add-date-money.component';
import { AllocateDataStandartComponent } from './allocate-data/allocate-data(standart)/allocate-data-standart.component';
import { DailyWasteComponent } from './daily-waste/daily-waste.component';
import { FoodWasteComponent } from './daily-waste/food-waste/food-waste.component';
import { CommunalWasteComponent } from './daily-waste/communal-waste/communal-waste.component';
import { TransportWasteComponent } from './daily-waste/transport-waste/transport-waste.component';
import { OtherWasteComponent } from './daily-waste/other-waste/other-waste.component';
import { AllocateDataComponent } from './allocate-data/allocate-data.component';
import { AllocateDataPercentageComponent } from './allocate-data/allocate-data(percentage)/allocate-data-percentage.component';
import { NotFoundComponent } from './not.found.component/not.found.component';
import { AddFieldNumberComponent } from './custom-fields/add-field-number/add-field-number.component';
import { AddFieldDateComponent } from './custom-fields/add-field-date/add-field-date.component';
import { AddTelephoneFieldComponent } from './custom-fields/add-telephone-field/add-telephone-field.component';

@NgModule({
  declarations: [
    AppComponent,
    AppMainPageComponent,
    CreateDataComponent,
    UpdateDataComponent,
    AddDateMoneyComponent,
    AllocateDataStandartComponent,
    DailyWasteComponent,
    FoodWasteComponent,
    CommunalWasteComponent,
    TransportWasteComponent,
    OtherWasteComponent,
    AllocateDataComponent,
    AllocateDataPercentageComponent,
    NotFoundComponent,
    AddFieldNumberComponent,
    AddFieldDateComponent,
    AddTelephoneFieldComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    TooltipModule.forRoot(),
    ReactiveFormsModule,
    FormlyModule.forRoot({
      types: [
        { name: 'add-amount', component: AddFieldNumberComponent, extends: 'input' },
        { name: 'add-date', component: AddFieldDateComponent, extends: 'input' },
        { name: 'add-phone-number', component: AddTelephoneFieldComponent, extends: 'input' }
      ],
      validationMessages: [
        { name: 'required', message: 'This field is required. Please, enter the required data' }
      ]
    }),
    FormlyBootstrapModule,
    NgBootstrapFormValidationModule.forRoot()
  ],
  providers:
    [
      AppSetInitialDataService,
      AppTransferDataService,
      AppDistributionDataService,
      AppDailyWasteService
    ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

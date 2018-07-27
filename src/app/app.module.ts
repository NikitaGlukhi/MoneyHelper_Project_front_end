import { BrowserModule } from '@angular/platform-browser';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NgBootstrapFormValidationModule } from 'ng-bootstrap-form-validation';

import { AppSetInitialDataService } from './services/app.set_initial_data.service';
import { AppTransferDataService } from './services/app.transfer-data.service';

import { routes } from './app.routing';
import { AppComponent } from './app.component/app.component';
import { AppMainPageComponent } from './mainpage/app.mainpage.component';
import { CreateDataComponent } from './add-date-money/create-data/create-data.component';
import { UpdateDataComponent } from './add-date-money/update-data/update-data.component';
import { AddDateMoneyComponent } from './add-date-money/add-date-money.component';
import { AllocateDataComponent } from './allocate-data/allocate-data.component';
import { DailyWasteComponent } from './daily-waste/daily-waste.component';
import { FoodWasteComponent } from './daily-waste/food-waste/food-waste.component';
import { CommunalWasteComponent } from './daily-waste/communal-waste/communal-waste.component';
import { TransportWasteComponent } from './daily-waste/transport-waste/transport-waste.component';
import { OtherWasteComponent } from './daily-waste/other-waste/other-waste.component';
import { NotFoundComponent } from './not.found.component/not.found.component';
import { AppDistributionDataService } from './services/app.distribution_data.service';

@NgModule({
  declarations: [
    AppComponent,
    AppMainPageComponent,
    CreateDataComponent,
    UpdateDataComponent,
    AddDateMoneyComponent,
    AllocateDataComponent,
    DailyWasteComponent,
    FoodWasteComponent,
    CommunalWasteComponent,
    TransportWasteComponent,
    OtherWasteComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    TooltipModule.forRoot(),
    ReactiveFormsModule,
    NgBootstrapFormValidationModule.forRoot()
  ],
  providers:
    [
      AppSetInitialDataService,
      AppTransferDataService,
      AppDistributionDataService
    ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

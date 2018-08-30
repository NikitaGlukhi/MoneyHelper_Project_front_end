import { Routes } from '@angular/router';

import { AppMainPageComponent } from './mainpage/app.mainpage.component';
import { NotFoundComponent } from './not.found.component/not.found.component';
import { CreateDataComponent } from './create-data/create-data.component';
import { AllocateDataComponent } from './allocate-data/allocate-data.component';
import { AllocateDataStandartComponent } from './allocate-data/allocate-data(standart)/allocate-data-standart.component';
import { DailyWasteComponent } from './daily-waste/daily-waste.component';
import { FoodWasteComponent } from './daily-waste/food-waste/food-waste.component';
import { CommunalWasteComponent } from './daily-waste/communal-waste/communal-waste.component';
import { TransportWasteComponent } from './daily-waste/transport-waste/transport-waste.component';
import { OtherWasteComponent } from './daily-waste/other-waste/other-waste.component';
import { AllocateDataPercentageComponent } from './allocate-data/allocate-data(percentage)/allocate-data-percentage.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'main-page' },
  { path: 'main-page', component: AppMainPageComponent },
  {
    path: 'add-date-money',
    component: CreateDataComponent,
  },
  { path: 'allocate-data',
    component: AllocateDataComponent,
    children:
    [
      { path: 'standard', component: AllocateDataStandartComponent },
      { path: 'percentage', component: AllocateDataPercentageComponent }
    ]
  },
  {
    path: 'daily-waste',
    component: DailyWasteComponent,
    children:
    [
      { path: 'food-waste', component: FoodWasteComponent },
      { path: 'communal-waste', component: CommunalWasteComponent },
      { path: 'transport-waste', component: TransportWasteComponent },
      { path: 'other-waste', component: OtherWasteComponent }
    ]
  },
  { path: '**', component: NotFoundComponent }
];

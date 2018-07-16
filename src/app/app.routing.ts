import { Routes } from '@angular/router';

import { AppMainPageComponent } from './mainpage/app.mainpage.component';
import { NotFoundComponent } from './not.found.component/not.found.component';
import { CreateDataComponent } from './add-date-money/create-data/create-data.component';
import { UpdateDataComponent } from './add-date-money/update-data/update-data.component';
import { AddDateMoneyComponent } from './add-date-money/add-date-money.component';
import { AllocateDataComponent } from './allocate-data/allocate-data.component';
import { DailyWasteComponent } from './daily-waste/daily-waste.component';
import { FoodWasteComponent } from './daily-waste/food-waste/food-waste.component';
import { CommunalWasteComponent } from './daily-waste/communal-waste/communal-waste.component';
import { TransportWasteComponent } from "./daily-waste/transport-waste/transport-waste.component";
import { OtherWasteComponent } from "./daily-waste/other-waste/other-waste.component";

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'main-page' },
  { path: 'main-page', component: AppMainPageComponent },
  {
    path: 'add-date-money',
    component: AddDateMoneyComponent,
    children:
    [
      { path: 'add', component: CreateDataComponent },
      { path: 'update', component: UpdateDataComponent }
    ]
  },
  { path: 'allocate-data', component: AllocateDataComponent },
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

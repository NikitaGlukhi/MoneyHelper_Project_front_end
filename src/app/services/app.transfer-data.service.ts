import { Injectable } from '@angular/core';

@Injectable()
export  class AppTransferDataService {

  private data;
  private amount: number;

  setData(data) {
    this.data = data;
  }

  setDataAmount(amount) {
    this.amount = amount;
  }

  getData() {
    let temp = this.data;
    this.clearData();
    return temp;
  }

  getAmountData() {
    let temp = this.amount;
    this.clearData();
    return temp;
  }

  clearData() {
    this.data = undefined;
  }

  clearAmountData() {
    this.amount = undefined;
  }
}

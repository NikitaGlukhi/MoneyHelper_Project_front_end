import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDateMoneyComponent } from './add-date-money.component';

describe('AddDateMoneyComponent', () => {
  let component: AddDateMoneyComponent;
  let fixture: ComponentFixture<AddDateMoneyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDateMoneyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDateMoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

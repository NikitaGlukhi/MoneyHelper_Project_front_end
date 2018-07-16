import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodWasteComponent } from './food-waste.component';

describe('FoodWasteComponent', () => {
  let component: FoodWasteComponent;
  let fixture: ComponentFixture<FoodWasteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodWasteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodWasteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

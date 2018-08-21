import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFieldDateComponent } from './add-field-date.component';

describe('AddFieldDateComponent', () => {
  let component: AddFieldDateComponent;
  let fixture: ComponentFixture<AddFieldDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFieldDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFieldDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTelephoneFieldComponent } from './add-telephone-field.component';

describe('AddTelephoneFieldComponent', () => {
  let component: AddTelephoneFieldComponent;
  let fixture: ComponentFixture<AddTelephoneFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTelephoneFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTelephoneFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

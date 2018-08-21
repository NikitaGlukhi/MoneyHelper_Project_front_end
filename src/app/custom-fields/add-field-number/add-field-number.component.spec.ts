import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFieldNumberComponent } from './add-field-number.component';

describe('AddFieldNumberComponent', () => {
  let component: AddFieldNumberComponent;
  let fixture: ComponentFixture<AddFieldNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFieldNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFieldNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllocateDataStandartComponent } from './allocate-data-standart.component';

describe('AllocateDataStandartComponent', () => {
  let component: AllocateDataStandartComponent;
  let fixture: ComponentFixture<AllocateDataStandartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllocateDataStandartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllocateDataStandartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

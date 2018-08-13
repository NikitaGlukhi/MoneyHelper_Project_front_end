import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllocateDataPercentageComponent } from './allocate-data-percentage.component';

describe('AllocateDataPercentageComponent', () => {
  let component: AllocateDataPercentageComponent;
  let fixture: ComponentFixture<AllocateDataPercentageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllocateDataPercentageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllocateDataPercentageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyWasteComponent } from './daily-waste.component';

describe('DailyWasteComponent', () => {
  let component: DailyWasteComponent;
  let fixture: ComponentFixture<DailyWasteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyWasteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyWasteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

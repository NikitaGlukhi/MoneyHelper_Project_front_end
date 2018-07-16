import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherWasteComponent } from './other-waste.component';

describe('OtherWasteComponent', () => {
  let component: OtherWasteComponent;
  let fixture: ComponentFixture<OtherWasteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherWasteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherWasteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

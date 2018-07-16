import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportWasteComponent } from './transport-waste.component';

describe('TransportWasteComponent', () => {
  let component: TransportWasteComponent;
  let fixture: ComponentFixture<TransportWasteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportWasteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportWasteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

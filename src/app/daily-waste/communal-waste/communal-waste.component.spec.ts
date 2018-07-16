import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunalWasteComponent } from './communal-waste.component';

describe('CommunalWasteComponent', () => {
  let component: CommunalWasteComponent;
  let fixture: ComponentFixture<CommunalWasteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunalWasteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunalWasteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllocateDataComponent } from './allocate-data.component';

describe('AllocateDataComponent', () => {
  let component: AllocateDataComponent;
  let fixture: ComponentFixture<AllocateDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllocateDataComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllocateDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

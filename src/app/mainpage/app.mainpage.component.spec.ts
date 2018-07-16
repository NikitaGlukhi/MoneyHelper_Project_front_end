import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { App.MainpageComponent } from './mainpage.component';

describe('App.MainpageComponent', () => {
  let component: App.MainpageComponent;
  let fixture: ComponentFixture<App.MainpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ App.MainpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(App.MainpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

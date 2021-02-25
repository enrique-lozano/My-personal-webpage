import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LeftTabComponent } from './left-tab.component';

describe('LeftTabComponent', () => {
  let component: LeftTabComponent;
  let fixture: ComponentFixture<LeftTabComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

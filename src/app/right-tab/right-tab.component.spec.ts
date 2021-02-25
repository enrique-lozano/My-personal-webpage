import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RightTabComponent } from './right-tab.component';

describe('RightTabComponent', () => {
  let component: RightTabComponent;
  let fixture: ComponentFixture<RightTabComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RightTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

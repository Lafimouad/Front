import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayClaimComponent } from './display-claim.component';

describe('DisplayClaimComponent', () => {
  let component: DisplayClaimComponent;
  let fixture: ComponentFixture<DisplayClaimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayClaimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayClaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelivererSarraComponent } from './deliverer-sarra.component';

describe('DelivererSarraComponent', () => {
  let component: DelivererSarraComponent;
  let fixture: ComponentFixture<DelivererSarraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelivererSarraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelivererSarraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

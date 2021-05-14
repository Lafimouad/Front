import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderSarraComponent } from './order-sarra.component';

describe('OrderSarraComponent', () => {
  let component: OrderSarraComponent;
  let fixture: ComponentFixture<OrderSarraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderSarraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderSarraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

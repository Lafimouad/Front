import { TestBed } from '@angular/core/testing';

import { OrderSARRAService } from './order-sarra.service';

describe('OrderSARRAService', () => {
  let service: OrderSARRAService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderSARRAService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

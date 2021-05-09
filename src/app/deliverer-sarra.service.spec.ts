import { TestBed } from '@angular/core/testing';

import { DelivererSarraService } from './deliverer-sarra.service';

describe('DelivererSarraService', () => {
  let service: DelivererSarraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DelivererSarraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

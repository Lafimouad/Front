import { TestBed } from '@angular/core/testing';

import { ChartsSarraService } from './charts-sarra.service';

describe('ChartsSarraService', () => {
  let service: ChartsSarraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChartsSarraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

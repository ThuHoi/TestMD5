import { TestBed } from '@angular/core/testing';

import { TourServiceService } from './TourService.service';

describe('ServiceService', () => {
  let service: TourServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TourServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

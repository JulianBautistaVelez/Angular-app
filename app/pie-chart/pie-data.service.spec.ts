import { TestBed } from '@angular/core/testing';

import { PieDataService } from './pie-data.service';

describe('PieDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PieDataService = TestBed.get(PieDataService);
    expect(service).toBeTruthy();
  });
});

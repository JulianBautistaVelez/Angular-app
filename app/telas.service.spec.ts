import { TestBed } from '@angular/core/testing';

import { TelasService } from './telas.service';

describe('TelasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TelasService = TestBed.get(TelasService);
    expect(service).toBeTruthy();
  });
});

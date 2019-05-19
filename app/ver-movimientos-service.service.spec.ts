import { TestBed } from '@angular/core/testing';

import { VerMovimientosServiceService } from './ver-movimientos-service.service';

describe('VerMovimientosServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VerMovimientosServiceService = TestBed.get(VerMovimientosServiceService);
    expect(service).toBeTruthy();
  });
});

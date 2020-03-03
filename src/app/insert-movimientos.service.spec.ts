import { TestBed } from '@angular/core/testing';

import { InsertMovimientosService } from './insert-movimientos.service';

describe('InsertMovimientosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InsertMovimientosService = TestBed.get(InsertMovimientosService);
    expect(service).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaMovimientosComponent } from './pagina-movimientos.component';

describe('PaginaMovimientosComponent', () => {
  let component: PaginaMovimientosComponent;
  let fixture: ComponentFixture<PaginaMovimientosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaMovimientosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaMovimientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

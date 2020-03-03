import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaCrearFacturasComponent } from './pagina-crear-facturas.component';

describe('PaginaCrearFacturasComponent', () => {
  let component: PaginaCrearFacturasComponent;
  let fixture: ComponentFixture<PaginaCrearFacturasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaCrearFacturasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaCrearFacturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

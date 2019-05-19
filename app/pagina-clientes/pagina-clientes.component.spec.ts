import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaClientesComponent } from './pagina-clientes.component';

describe('PaginaClientesComponent', () => {
  let component: PaginaClientesComponent;
  let fixture: ComponentFixture<PaginaClientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaClientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

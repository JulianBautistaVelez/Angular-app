import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaGraficosComponent } from './pagina-graficos.component';

describe('PaginaGraficosComponent', () => {
  let component: PaginaGraficosComponent;
  let fixture: ComponentFixture<PaginaGraficosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaGraficosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaGraficosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

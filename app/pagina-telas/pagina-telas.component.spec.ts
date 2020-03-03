import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaTelasComponent } from './pagina-telas.component';

describe('PaginaTelasComponent', () => {
  let component: PaginaTelasComponent;
  let fixture: ComponentFixture<PaginaTelasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaTelasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaTelasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

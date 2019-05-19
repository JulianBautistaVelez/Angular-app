import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertClienteDialogRefComponent } from './insert-cliente-dialog-ref.component';

describe('InsertClienteDialogRefComponent', () => {
  let component: InsertClienteDialogRefComponent;
  let fixture: ComponentFixture<InsertClienteDialogRefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertClienteDialogRefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertClienteDialogRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

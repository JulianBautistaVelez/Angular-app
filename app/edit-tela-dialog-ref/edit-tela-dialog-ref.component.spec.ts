import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTelaDialogRefComponent } from './edit-tela-dialog-ref.component';

describe('EditTelaDialogRefComponent', () => {
  let component: EditTelaDialogRefComponent;
  let fixture: ComponentFixture<EditTelaDialogRefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTelaDialogRefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTelaDialogRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

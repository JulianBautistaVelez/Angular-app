import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoverDineroDialogRefComponent } from './mover-dinero-dialog-ref.component';

describe('MoverDineroDialogRefComponent', () => {
  let component: MoverDineroDialogRefComponent;
  let fixture: ComponentFixture<MoverDineroDialogRefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoverDineroDialogRefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoverDineroDialogRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

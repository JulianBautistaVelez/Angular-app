import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoverDineroPopupComponent } from './mover-dinero-popup.component';

describe('MoverDineroPopupComponent', () => {
  let component: MoverDineroPopupComponent;
  let fixture: ComponentFixture<MoverDineroPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoverDineroPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoverDineroPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

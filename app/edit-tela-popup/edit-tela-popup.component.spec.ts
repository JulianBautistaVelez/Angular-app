import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTelaPopupComponent } from './edit-tela-popup.component';

describe('EditTelaPopupComponent', () => {
  let component: EditTelaPopupComponent;
  let fixture: ComponentFixture<EditTelaPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTelaPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTelaPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

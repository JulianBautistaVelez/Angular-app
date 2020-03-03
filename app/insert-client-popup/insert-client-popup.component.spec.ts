import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertClientPopupComponent } from './insert-client-popup.component';

describe('InsertClientPopupComponent', () => {
  let component: InsertClientPopupComponent;
  let fixture: ComponentFixture<InsertClientPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertClientPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertClientPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

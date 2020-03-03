import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaTelasComponent } from './vista-telas.component';

describe('VistaTelasComponent', () => {
  let component: VistaTelasComponent;
  let fixture: ComponentFixture<VistaTelasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaTelasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaTelasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

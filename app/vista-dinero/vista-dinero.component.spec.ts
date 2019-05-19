import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaDineroComponent } from './vista-dinero.component';

describe('VistaDineroComponent', () => {
  let component: VistaDineroComponent;
  let fixture: ComponentFixture<VistaDineroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaDineroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaDineroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

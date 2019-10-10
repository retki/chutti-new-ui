import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveBankComponent } from './leave-bank.component';

describe('LeaveBankComponent', () => {
  let component: LeaveBankComponent;
  let fixture: ComponentFixture<LeaveBankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaveBankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

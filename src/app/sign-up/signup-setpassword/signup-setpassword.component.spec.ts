import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupSetpasswordComponent } from './signup-setpassword.component';

describe('SignupSetpasswordComponent', () => {
  let component: SignupSetpasswordComponent;
  let fixture: ComponentFixture<SignupSetpasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupSetpasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupSetpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

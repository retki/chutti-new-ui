import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeonleaveComponent } from './employeeonleave.component';

describe('EmployeeonleaveComponent', () => {
  let component: EmployeeonleaveComponent;
  let fixture: ComponentFixture<EmployeeonleaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeonleaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeonleaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

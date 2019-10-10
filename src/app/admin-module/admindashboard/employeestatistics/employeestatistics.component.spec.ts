import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeestatisticsComponent } from './employeestatistics.component';

describe('EmployeestatisticsComponent', () => {
  let component: EmployeestatisticsComponent;
  let fixture: ComponentFixture<EmployeestatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeestatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeestatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

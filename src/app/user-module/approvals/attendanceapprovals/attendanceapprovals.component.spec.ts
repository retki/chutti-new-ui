import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceapprovalsComponent } from './attendanceapprovals.component';

describe('AttendanceapprovalsComponent', () => {
  let component: AttendanceapprovalsComponent;
  let fixture: ComponentFixture<AttendanceapprovalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttendanceapprovalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendanceapprovalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

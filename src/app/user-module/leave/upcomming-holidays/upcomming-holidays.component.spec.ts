import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcommingHolidaysComponent } from './upcomming-holidays.component';

describe('UpcommingHolidaysComponent', () => {
  let component: UpcommingHolidaysComponent;
  let fixture: ComponentFixture<UpcommingHolidaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcommingHolidaysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcommingHolidaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

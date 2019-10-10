import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhosOnLeaveComponent } from './whos-on-leave.component';

describe('WhosOnLeaveComponent', () => {
  let component: WhosOnLeaveComponent;
  let fixture: ComponentFixture<WhosOnLeaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhosOnLeaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhosOnLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

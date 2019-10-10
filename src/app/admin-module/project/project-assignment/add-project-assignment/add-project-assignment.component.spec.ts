import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProjectAssignmentComponent } from './add-project-assignment.component';

describe('AddProjectAssignmentComponent', () => {
  let component: AddProjectAssignmentComponent;
  let fixture: ComponentFixture<AddProjectAssignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProjectAssignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProjectAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

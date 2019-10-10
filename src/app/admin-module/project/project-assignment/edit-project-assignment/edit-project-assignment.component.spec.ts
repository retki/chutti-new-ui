import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProjectAssignmentComponent } from './edit-project-assignment.component';

describe('EditProjectAssignmentComponent', () => {
  let component: EditProjectAssignmentComponent;
  let fixture: ComponentFixture<EditProjectAssignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProjectAssignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProjectAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProjectListComponent } from './edit-project-list.component';

describe('EditProjectListComponent', () => {
  let component: EditProjectListComponent;
  let fixture: ComponentFixture<EditProjectListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProjectListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProjectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

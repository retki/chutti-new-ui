import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProjectListComponent } from './add-project-list.component';

describe('AddProjectListComponent', () => {
  let component: AddProjectListComponent;
  let fixture: ComponentFixture<AddProjectListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProjectListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProjectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

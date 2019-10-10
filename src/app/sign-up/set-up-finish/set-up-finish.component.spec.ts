import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetUpFinishComponent } from './set-up-finish.component';

describe('SetUpFinishComponent', () => {
  let component: SetUpFinishComponent;
  let fixture: ComponentFixture<SetUpFinishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetUpFinishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetUpFinishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalongoingprojectsComponent } from './totalongoingprojects.component';

describe('TotalongoingprojectsComponent', () => {
  let component: TotalongoingprojectsComponent;
  let fixture: ComponentFixture<TotalongoingprojectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalongoingprojectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalongoingprojectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

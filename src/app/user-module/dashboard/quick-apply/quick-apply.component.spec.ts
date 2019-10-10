import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickApplyComponent } from './quick-apply.component';

describe('QuickApplyComponent', () => {
  let component: QuickApplyComponent;
  let fixture: ComponentFixture<QuickApplyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickApplyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickApplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGenerationLeavePolicyComponent } from './admin-generation-leave-policy.component';

describe('AdminGenerationLeavePolicyComponent', () => {
  let component: AdminGenerationLeavePolicyComponent;
  let fixture: ComponentFixture<AdminGenerationLeavePolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminGenerationLeavePolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminGenerationLeavePolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

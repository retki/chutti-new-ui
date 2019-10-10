import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGenerationOrganizationComponent } from './admin-generation-organization.component';

describe('AdminGenerationOrganizationComponent', () => {
  let component: AdminGenerationOrganizationComponent;
  let fixture: ComponentFixture<AdminGenerationOrganizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminGenerationOrganizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminGenerationOrganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGenerationUserMappingComponent } from './admin-generation-user-mapping.component';

describe('AdminGenerationUserMappingComponent', () => {
  let component: AdminGenerationUserMappingComponent;
  let fixture: ComponentFixture<AdminGenerationUserMappingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminGenerationUserMappingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminGenerationUserMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

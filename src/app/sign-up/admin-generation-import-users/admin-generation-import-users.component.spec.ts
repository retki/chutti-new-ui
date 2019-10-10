import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGenerationImportUsersComponent } from './admin-generation-import-users.component';

describe('AdminGenerationImportUsersComponent', () => {
  let component: AdminGenerationImportUsersComponent;
  let fixture: ComponentFixture<AdminGenerationImportUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminGenerationImportUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminGenerationImportUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

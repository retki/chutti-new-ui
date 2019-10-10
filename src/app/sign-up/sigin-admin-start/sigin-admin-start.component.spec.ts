import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiginAdminStartComponent } from './sigin-admin-start.component';

describe('SiginAdminStartComponent', () => {
  let component: SiginAdminStartComponent;
  let fixture: ComponentFixture<SiginAdminStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiginAdminStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiginAdminStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

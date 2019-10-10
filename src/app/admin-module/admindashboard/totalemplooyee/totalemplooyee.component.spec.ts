import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalemplooyeeComponent } from './totalemplooyee.component';

describe('TotalemplooyeeComponent', () => {
  let component: TotalemplooyeeComponent;
  let fixture: ComponentFixture<TotalemplooyeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalemplooyeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalemplooyeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

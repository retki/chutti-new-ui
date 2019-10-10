import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChuttiPaginationComponent } from './chutti-pagination.component';

describe('ChuttiPaginationComponent', () => {
  let component: ChuttiPaginationComponent;
  let fixture: ComponentFixture<ChuttiPaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChuttiPaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChuttiPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

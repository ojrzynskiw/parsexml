import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookLevel1Component } from './book-level1.component';

describe('BookLevel1Component', () => {
  let component: BookLevel1Component;
  let fixture: ComponentFixture<BookLevel1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookLevel1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookLevel1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookLevel0Component } from './book-level0.component';

describe('BookLevel0Component', () => {
  let component: BookLevel0Component;
  let fixture: ComponentFixture<BookLevel0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookLevel0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookLevel0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

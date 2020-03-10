import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookLevel3Component } from './book-level3.component';

describe('BookLevel3Component', () => {
  let component: BookLevel3Component;
  let fixture: ComponentFixture<BookLevel3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookLevel3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookLevel3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

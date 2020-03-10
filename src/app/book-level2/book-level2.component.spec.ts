import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookLevel2Component } from './book-level2.component';

describe('BookLevel2Component', () => {
  let component: BookLevel2Component;
  let fixture: ComponentFixture<BookLevel2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookLevel2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookLevel2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

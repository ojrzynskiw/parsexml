import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookParagraphComponent } from './book-paragraph.component';

describe('BookParagraphComponent', () => {
  let component: BookParagraphComponent;
  let fixture: ComponentFixture<BookParagraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookParagraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookParagraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

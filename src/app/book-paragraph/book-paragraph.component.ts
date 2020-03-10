import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-book-paragraph',
  templateUrl: './book-paragraph.component.html',
  styleUrls: ['./book-paragraph.component.css']
})
export class BookParagraphComponent implements OnInit {

  @Input() paragraphs: object[];

  constructor() { }

  ngOnInit() {
  }

  isArray(): boolean { return this.paragraphs instanceof Array; }
}

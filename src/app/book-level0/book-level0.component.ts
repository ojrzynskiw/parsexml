import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-book-level0',
  templateUrl: './book-level0.component.html',
  styleUrls: ['./book-level0.component.css']
})
export class BookLevel0Component implements OnInit {

  @Input() content: object;

  constructor() { }

  ngOnInit() {
  }

}

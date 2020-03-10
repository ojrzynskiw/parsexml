import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-book-level1',
  templateUrl: './book-level1.component.html',
  styleUrls: ['./book-level1.component.css']
})
export class BookLevel1Component implements OnInit {

  @Input() parts: object[];

  constructor() { }

  ngOnInit() {
  }

}

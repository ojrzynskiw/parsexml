import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-book-level2',
  templateUrl: './book-level2.component.html',
  styleUrls: ['./book-level2.component.css']
})
export class BookLevel2Component implements OnInit {

  @Input() parts: object[];

  constructor() { }

  ngOnInit() {
  }

}

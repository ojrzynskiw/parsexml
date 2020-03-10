import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-book-level3',
  templateUrl: './book-level3.component.html',
  styleUrls: ['./book-level3.component.css']
})
export class BookLevel3Component implements OnInit {

  @Input() parts: object[];

  constructor() { }

  ngOnInit() {
  }

  isArray(): boolean { return this.parts instanceof Array; }

}

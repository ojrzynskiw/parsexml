import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import { NgxXml2jsonService } from 'ngx-xml2json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  form: FormGroup;
  xml: Object;

  constructor (
    private formBuilder: FormBuilder,
    private ngxXml2jsonService: NgxXml2jsonService) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      xmlFile: ['']
    });
  }

  onFileChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      const reader: FileReader = new FileReader();
      reader.onload = () => {
        const content = reader.result.toString();
        const parser = new DOMParser();
        const xml = parser.parseFromString(content, 'text/xml');
        const obj = this.ngxXml2jsonService.xmlToJson(xml);
        console.log(obj);
        this.xml = obj;
      }
      reader.readAsText(file);
    }
  }

  isArray (item: any): boolean {
    return item instanceof Array;
  }

  onSubmit() {}
}

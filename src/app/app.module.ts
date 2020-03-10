import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { BookLevel1Component } from './book-level1/book-level1.component';
import { BookLevel2Component } from './book-level2/book-level2.component';
import { BookLevel3Component } from './book-level3/book-level3.component';
import { BookLevel0Component } from './book-level0/book-level0.component';
import { BookParagraphComponent } from './book-paragraph/book-paragraph.component';

@NgModule({
  declarations: [
    AppComponent,
    BookLevel1Component,
    BookLevel2Component,
    BookLevel3Component,
    BookLevel0Component,
    BookParagraphComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

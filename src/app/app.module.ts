import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';


import { AppComponent } from './app.component';
import { XyzComponent } from './xyz/xyz.component';
import { BooksComponent } from './books/books.component';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    XyzComponent,
    BooksComponent
  ],
  imports: [
    DragDropModule,
    FormsModule,
    BrowserModule,
    RouterModule.forRoot([
      {path: 'books', component: BooksComponent},
      {path: 'angular-demo', component: BooksComponent},
    ]),
    MatCardModule,
  ],
  providers: [],
   bootstrap: [AppComponent, BooksComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  book: string;
  author: string;
  publishdate: string;
  books = [];
  constructor() { }
  onDrop(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.books,
      event.previousIndex,
      event.currentIndex);
  }
  addBook(): void {
      this.books.push({title: this.book, author: this.author, publishdate: this.publishdate});
      this.book = '';
      this.author = '';
      this.publishdate = '';
  }
  capitalizeTitles(): void {
    const chk = document.getElementById('checkbox') as HTMLInputElement;
    const elements = document.querySelectorAll('.book-item .card-body .book-title');
    // console.log(elements);
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      if (!chk.checked){
        element.innerHTML = element.innerHTML.toLowerCase();
      }else{
        element.innerHTML = element.innerHTML.toUpperCase();
      }
    }
  }
  ngOnInit(): void {
    this.books = [
      {title: 'Title1', author: 'Author1', publishdate: '1/1/2020'},
      {title: 'Title2', author: 'Author2', publishdate: '1/2/2020'},
      {title: 'Title3', author: 'Author3', publishdate: '1/3/2020'},
      {title: 'Title4', author: 'Author4', publishdate: '1/4/2020'},
      {title: 'Title5', author: 'Author5', publishdate: '1/5/2020'},
    ];
  }
}

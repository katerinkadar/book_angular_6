import { Component, OnInit } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styles: []
})
export class BooksComponent implements OnInit {

  book: Book = {
    id: 1,
    name: 'Приемы объектно-ориентированного проектирования. Паттерны проектирования'
  };

  constructor() { }

  ngOnInit() {
  }

}

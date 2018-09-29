import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BOOKS } from '../mock-books';
import { BookService } from '../book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: Book[];
  constructor(private bookService: BookService) { }

  getBooks(): void {
    this.bookService.getBooks()
      .subscribe(books => this.books = books);
  }
  ngOnInit() {
    this.getBooks();
  }
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.bookService.addBook({ name } as Book)
      .subscribe(book => {
        this.books.push(book);
      });
  }
  delete(book: Book): void {
    this.books = this.books.filter(h => h !== book);
    this.bookService.deleteBook(book).subscribe();
  }

}

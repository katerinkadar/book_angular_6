import { Injectable } from '@angular/core';
import { Book } from './book';
import { BOOKS } from './mock-books';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }
  getBooks(): Observable<Book[]> {
    return of(BOOKS);
  }
  getBook(id: number): Observable<Book> {
     return of(BOOKS.find(book => book.id === id));
  }
}

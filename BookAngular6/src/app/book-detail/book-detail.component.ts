import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../book.service';


@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: [ './book-detail.component.css' ]
})
export class BookDetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private location: Location
  ) {}
  @Input() book: Book;

  ngOnInit(): void {
    this.getBook();
  }
  getBook(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.bookService.getBook(id)
      .subscribe(book => this.book = book);
  }
  goBack(): void {
    this.location.back();
  }
  save(): void {
    this.bookService.updateBook(this.book)
      .subscribe(() => this.goBack());
  }
}

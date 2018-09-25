import { Component, OnInit, Input} from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styles: []
})
export class BookDetailComponent implements OnInit {
  constructor() { }
  @Input() book: Book;

  ngOnInit() {
  }

}

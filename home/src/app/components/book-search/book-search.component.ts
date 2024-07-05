import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.scss']
})
export class BookSearchComponent {

@Output() search = new EventEmitter<string>();
query: string = '';

searchBooks() {
  this.search.emit(this.query);
}

}

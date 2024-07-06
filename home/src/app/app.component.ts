import { Component } from '@angular/core';
import { BookService } from './services/book.service';
import { finalize } from 'rxjs';
import { Book } from './modals/book.modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private _bookService: BookService) { }

  title = 'home';
  showResult: boolean = false;
  isloading: boolean = false;
  books: Book[] = [];

  onSearch(query: string) {
    this.showResult = true
    this.getSearchresults(query)
  }

  getSearchresults(query: string) {
    this.isloading = true;
    this._bookService.searchBooks(query).pipe(finalize(() => { this.isloading = true }))
      .subscribe((data: any) => {
        data.items.forEach((element: any) => {
          this.books.push(
            element.id, element.volumeInfo?.title, element.volumeInfo?.authors? element.volumeInfo?.authors[0] : '-', element.volumeInfo?.publisher ?? '-', element.volumeInfo?.publishedDate, element.volumeInfo?.pageCount);
        });
      });
  }

}

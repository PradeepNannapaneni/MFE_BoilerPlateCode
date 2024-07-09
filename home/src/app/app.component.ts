import { Component } from '@angular/core';
import { BookService } from './services/book.service';
import { finalize } from 'rxjs';
import { Book } from './modals/book.modal';
import { TableData } from './modals/table-data.modal';
import { BOOK_TABLE_HEADERS } from './constants/constants';

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
  bookTableData: TableData = {} as TableData;

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
            {
              id: element.id,
              title: element.volumeInfo?.title,
              author: element.volumeInfo?.authors ? element.volumeInfo?.authors[0] : '-',
              publisher: element.volumeInfo?.publisher ?? '-',
              publicationYear: element.volumeInfo?.publishedDate.toString() ?? '-',
              pageCount: element.volumeInfo?.pageCount
            });
        });
        this.parseBookData(this.books);
      });
  }

  parseBookData(books: Book[]) {
    this.bookTableData = this._bookService.getBookTableData(books, 1, BOOK_TABLE_HEADERS[1]);
  }

}

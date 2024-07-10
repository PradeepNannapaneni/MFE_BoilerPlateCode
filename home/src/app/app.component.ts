import { Component } from '@angular/core';
import { BookService } from './services/book.service';
import { finalize } from 'rxjs';
import { Book } from './modals/book.modal';
import { TableData } from './modals/table-data.modal';
import { BOOK_TABLE_HEADERS } from './constants/constants';
import { BookDetail, BookDetailData } from './modals/book-detail.modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private _bookService: BookService) { }

  title = 'home';
  showSearch: boolean = true;
  isloading: boolean = false;
  books: Book[] = [];
  bookTableData: TableData = {} as TableData;
  bookDetailData : BookDetailData = {} as BookDetailData;
  showDetails: boolean = false;
  showList: boolean = false;

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
              publicationYear: element.volumeInfo?.publishedDate?.toString() ?? '-',
              pageCount: element.volumeInfo?.pageCount
            });
        });
        this.bookTableData = this._bookService.getBookTableData(this.books, 1, BOOK_TABLE_HEADERS[1]);
        this.showSearch = false;
        this.showList = true;
      });
  }

  getBookDetails(id: string) {
    this._bookService.bookDetails(id).pipe(finalize(() => { this.isloading = true }))
      .subscribe((data: BookDetail) => {
        this.bookDetailData = this._bookService.getBookDetailsData(data);
        this.showList = false;
        this.showDetails = true;
        console.log(this.bookDetailData,this.showDetails);
      });
  }

}

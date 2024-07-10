import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from 'src/app/modals/book.modal';
import { TableData } from 'src/app/modals/table-data.modal';
import { BOOK_TABLE_HEADERS } from 'src/app/constants/constants';
import { TableHeader } from 'src/app/modals/table-data.modal';
import { BookService } from 'src/app/services/book.service'; // Import the BookService

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent {

  @Input() books: Book[] = [];
  @Input() bookTableData: TableData = {} as TableData;

  @Output() getDetails = new EventEmitter<string>(); 

  bookHeaders: TableHeader[] = BOOK_TABLE_HEADERS;
  sortByHeader: TableHeader = this.bookHeaders[0];

  constructor(private _bookService: BookService) {} 

  onHeaderClicked(header: TableHeader) {
    this.sortByHeader = header;
    this.bookTableData = this._bookService.getBookTableData(this.books, 1, header);
  }

  paginationChanged(pageNumber: number) {
    this.bookTableData = this._bookService.getBookTableData(this.books, pageNumber, this.sortByHeader);
  }

  exportClicked() {
  console.log('Export Clicked');
  }

  getBookDetails(id: string) {  
    this.getDetails.emit(id);
  }
}

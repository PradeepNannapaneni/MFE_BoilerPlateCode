import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BookDetailData } from 'src/app/modals/book-detail.modal';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent {

  @Input() bookDetailData: BookDetailData = {} as BookDetailData;

  @Output() showSearch = new EventEmitter<void>();
  @Output() showList = new EventEmitter<void>();

  backToSearch() {
    this.showSearch.emit();
  }

  backToList() {
    this.showList.emit();
  }
}

import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Book } from '../modals/book.modal';
import { GET_BOOKS, GET_BOOK_DETAILS, TABLE_MAPPING, TABLE_ROWS_PER_PAGE } from '../constants/constants';
import { CellData, RowData, TableData, TableHeader, TableMap } from '../modals/table-data.modal';
import { SortEnum } from '../enums/sort.enum';
import { BookDetail, BookDetailData, Section } from '../modals/book-detail.modal';

@Injectable({
    providedIn: 'root'
})
export class BookService {
    books: Book[] = [];
    //@ts-ignore
    booktableData: TableData;

    constructor(private _apiService: ApiService) { }

    searchBooks(query: string): Observable<any> {
        return this._apiService.get(`${GET_BOOKS}?q=${query}&maxResults=40`);
    }

    bookDetails(query: string): Observable<BookDetail> {
        return this._apiService.get(`${GET_BOOK_DETAILS}${query}`);
    }

    getBookTableData(books: Book[], pageNumber: number, sortByHeader: TableHeader): TableData {
        let rows: RowData[] = books.map((book: Book) => {
            let cells: CellData[] = []
            cells.push({ value: book.id, width: 1.5 });
            cells.push({ value: book.title, width: 3 });
            cells.push({ value: book.author, width: 2 });
            cells.push({ value: book.publisher, width: 2 });
            cells.push({ value: book.publicationYear?.toString(), width: 2 });
            cells.push({ value: book.pageCount?.toString(), width: 2 });
            let rowData: RowData = { cells: cells, id: book.id };
            return rowData;
        });
        return this.getTableData(sortByHeader, rows, pageNumber, books.length);
    }

    static getTableMapping(): TableMap[] {
        let mapping: TableMap[] = []
        TABLE_MAPPING.forEach((element: any) => {
            mapping.push({ mapping: element.mapping, srlNo: element.srlNo, displayName: element.displayName, width: element.width, hidden: element.hidden });
        });
        return mapping;
    }

    getTableData(sortByHeader: TableHeader, rows: RowData[], pageNumber: number, totalCount: number): TableData {
        BookService.sortRows(rows, sortByHeader);
        if (pageNumber > 0) {
            rows = rows.slice((pageNumber - 1) * TABLE_ROWS_PER_PAGE, pageNumber * TABLE_ROWS_PER_PAGE);
        }

        let tableData: TableData = {
            rows: rows,
            totalCount: totalCount,
            pageSize: TABLE_ROWS_PER_PAGE,
            pageNumber: pageNumber
        }
        return tableData;
    }
    private static sortRows(rows: RowData[], sortByHeader: TableHeader) {
        const mapping = this.getTableMapping();
        // @ts-ignore
        let column = +mapping.find((element: TableMap) => element.displayName === sortByHeader.value)?.srlNo;
        let desc = sortByHeader.sort === SortEnum.descending;
        rows.sort((a: RowData, b: RowData) => {
            let valueA = a.cells[column].value;
            let valueB = b.cells[column].value;
            if (isNaN(+valueA) && isNaN(+valueB)) {
                return !desc ? ((+valueA) - (+valueB)) : ((+valueB) - (+valueA));
            }
            return this.sortRow(valueA, valueB, desc);
        });
    }

    private static sortRow = (valueA: string, valueB: string, desc: boolean): number => {
        if (valueA > valueB) {
            return !desc ? 1 : -1;
        } else if (valueA < valueB) {
            return !desc ? -1 : 1;
        }
        return 0;
    }

    getBookDetailsData(bookDetails: BookDetail): BookDetailData {
        let sections: Section[] = [];
        sections.push({ 
            sectionName: 'Volume Info',
            display: true,
            collapsible: false,
            order: 1,
            fields: [
                { key: 'Publisher', value: bookDetails.volumeInfo.publisher },
                { key: 'Published Date', value: bookDetails.volumeInfo.publishedDate },
                { key: 'Page Count', value: bookDetails.volumeInfo.pageCount?.toString() },
                { key: 'Categories', value: bookDetails.volumeInfo.categories.join(', ') },
                { key: 'Average Rating', value: bookDetails.volumeInfo.averageRating?.toString() },
                { key: 'Ratings Count', value: bookDetails.volumeInfo.ratingsCount?.toString() },
                { key: 'Language', value: bookDetails.volumeInfo.language },
                { key: 'Preview Link', value: bookDetails.volumeInfo.previewLink },
                { key: 'Info Link', value: bookDetails.volumeInfo.infoLink },
                { key: 'Canonical Volume Link', value: bookDetails.volumeInfo.canonicalVolumeLink }
            ]
         });
        sections.push({ 
            sectionName: 'Sale Info',
            display: true,
            collapsible: false,
            order: 2,
            fields: [
                { key: 'Country', value: bookDetails.saleInfo.country },
                { key: 'Saleability', value: bookDetails.saleInfo.saleability },
                { key: 'Is Ebook', value: bookDetails.saleInfo.isEbook?.toString() }
            ]
         });
        sections.push({ 
            sectionName: 'Access Info',
            display: true,
            collapsible: false,
            order: 3,
            fields: [
                { key: 'Country', value: bookDetails.accessInfo.country },
                { key: 'Viewability', value: bookDetails.accessInfo.viewability },
                { key: 'Embeddable', value: bookDetails.accessInfo.embeddable?.toString() },
                { key: 'Public Domain', value: bookDetails.accessInfo.publicDomain?.toString() },
                { key: 'Text To Speech Permission', value: bookDetails.accessInfo.textToSpeechPermission },
                { key: 'Epub Available', value: bookDetails.accessInfo.epub.isAvailable?.toString() },
                { key: 'Acs Token Link', value: bookDetails.accessInfo.epub.acsTokenLink },
                { key: 'Pdf Available', value: bookDetails.accessInfo.pdf.isAvailable?.toString() }
            ]
         });

         let bookDetailData: BookDetailData = {
            sections: sections,
            imageLink: bookDetails.volumeInfo.imageLinks?.thumbnail?.replace('https', 'http') ?? '',
            title: bookDetails.volumeInfo.title ?? '',
            authors: bookDetails.volumeInfo.authors.join(', '),
            description: bookDetails.volumeInfo.description ?? ''
         }

        return bookDetailData;
    }

}
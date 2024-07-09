import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Book } from '../modals/book.modal';
import { GET_BOOKS, TABLE_MAPPING, TABLE_ROWS_PER_PAGE } from '../constants/constants';
import { CellData, RowData, TableData, TableHeader, TableMap } from '../modals/table-data.modal';
import { SortEnum } from '../enums/sort.enum';

@Injectable({
    providedIn: 'root'
})
export class BookService {
    private apiUrl = GET_BOOKS;
    books: Book[] = [];
    //@ts-ignore
    booktableData: TableData;

    constructor(private _apiService: ApiService) { }

    searchBooks(query: string): Observable<any> {
        return this._apiService.get(`${this.apiUrl}?q=${query}`);
    }

    getBookTableData(books: Book[], pageNumber: number, sortByHeader: TableHeader): TableData {
        let rows: RowData[] = books.map((book: Book) => {
            let cells: CellData[] = []
            cells.push({ value: book.id, width: 1 });
            cells.push({ value: book.title, width: 3 });
            cells.push({ value: book.author, width: 1.5 });
            cells.push({ value: book.publisher, width: 1.5 });
            cells.push({ value: book.publicationYear.toString(), width: 1 });
            cells.push({ value: book.pageCount.toString(), width: 1 });
            let rowData: RowData = { cells: cells };
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

}
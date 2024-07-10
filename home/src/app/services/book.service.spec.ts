import { TestBed } from '@angular/core/testing';
import { BookService } from './book.service';
import { ApiService } from './api.service';
import { Book } from '../modals/book.modal';
import { TableHeader } from '../modals/table-data.modal';
import { BookDetail } from '../modals/book-detail.modal';
import { SortEnum } from '../enums/sort.enum';
const bookDetails: BookDetail = require('../../assets/book-details.json');

describe('BookService', () => {
    let service: BookService;
    const mockApiService = jasmine.createSpyObj('ApiService', {
        get: Promise.resolve()
    });

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [{ provide: ApiService, useValue: mockApiService }]
        });
        service = TestBed.inject(BookService);
    });

    it('should retrieve books', () => {
        service.searchBooks('test');
        expect(mockApiService.get).toHaveBeenCalled();
    });

    it('should retrieve book details', () => {
        const query = 'bookId';
        service.bookDetails(query);
        expect(mockApiService.get).toHaveBeenCalledWith(`/${query}`);
    });

    it('should return table mapping', () => {
        const tableMapping = BookService.getTableMapping();
        expect(tableMapping).toBeDefined();
    });

    it('should return table data', () => {
        const books: Book[] =  [
            { id: '1', title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', publicationYear: '2021', pageCount: 100 },
            { id: '2', title: 'Book 2', author: 'Author 2', publisher: 'Publisher 2', publicationYear: '2022', pageCount: 200 },
            { id: '3', title: 'Book 3', author: 'Author 3', publisher: 'Publisher 3', publicationYear: '2023', pageCount: 300 },
            { id: '4', title: 'Book 4', author: 'Author 4', publisher: 'Publisher 4', publicationYear: '2024', pageCount: 400 },
            { id: '5', title: 'Book 5', author: 'Author 5', publisher: 'Publisher 5', publicationYear: '2025', pageCount: 500 }
        ];
        const pageNumber = 1;
        const sortByHeader: TableHeader = { value: 'Author', sort: SortEnum.ascending, width: 1 };
        const tableData = service.getBookTableData(books, pageNumber, sortByHeader);
        expect(tableData).toBeDefined();
    });

    it('should return book details data', () => {
        const bookDetails: BookDetail = require('../../assets/book-details.json');
        const bookDetailsData = service.getBookDetailsData(bookDetails);
        expect(bookDetailsData).toBeDefined();
    });
});

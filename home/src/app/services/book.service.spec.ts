import { TestBed } from '@angular/core/testing';
import { BookService } from './book.service';
import { ApiService } from './api.service';

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

});
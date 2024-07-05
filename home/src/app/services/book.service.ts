import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Book } from '../modals/book.modal';
import { GET_BOOKS } from '../constants/constants';

@Injectable({
    providedIn: 'root'
})
export class BookService {
    private apiUrl = GET_BOOKS;
    Books: Book[] = [];

    constructor(private _apiService: ApiService) { }

    searchBooks(query: string): Observable<any> {
        return this._apiService.get(`${this.apiUrl}?q=${query}`);
    }

}
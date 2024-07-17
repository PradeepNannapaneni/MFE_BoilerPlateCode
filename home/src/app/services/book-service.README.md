# BookService

## Summary

The **BookService** manages API interactions related to book data in an Angular application. It provides functionality for searching books, retrieving book details, and generating structured data for display in tables.

## Features

- Search for books based on user queries.
- Fetch detailed information about specific books.
- Generate structured table data for book listings.
- Support for sorting and pagination of book data.

## Methods

### `searchBooks(query: string): Observable<any>`

Searches for books based on the provided query.

- **Parameters:**
  - `query`: The search term for querying books.
  
- **Returns:** An observable containing the search results.

### `bookDetails(query: string): Observable<BookDetail>`

Fetches detailed information about a specific book using its ID.

- **Parameters:**
  - `query`: The ID of the book to retrieve details for.

- **Returns:** An observable containing the book details.

### `getBookTableData(books: Book[], pageNumber: number, sortByHeader: TableHeader): TableData`

Transforms the list of books into a format suitable for table display.

- **Parameters:**
  - `books`: An array of `Book` objects.
  - `pageNumber`: The current page number for pagination.
  - `sortByHeader`: The header by which to sort the table data.

- **Returns:** A `TableData` object containing rows of book data.

### `getBookDetailsData(bookDetails: BookDetail): BookDetailData`

Extracts relevant information from the book details.

- **Parameters:**
  - `bookDetails`: The `BookDetail` object retrieved from the API.

- **Returns:** A structured `BookDetailData` object for display.

### `getHeaders(post: boolean, addAccessToken: boolean): Object`

Generates headers for HTTP requests.

- **Parameters:**
  - `post`: Indicates if the request is a POST request.
  - `addAccessToken`: Whether to include the access token in the headers.

- **Returns:** An object containing headers.

## Example Usage

Here’s an example of how to use the `BookService` in an Angular component or service:

**example.component.ts**

```typescript
import { Component } from '@angular/core';
import { BookService } from './services/book.service';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html'
})
export class ExampleComponent {
  constructor(private bookService: BookService) {
    this.bookService.searchBooks('Angular').subscribe(data => {
      console.log('Search Results:', data);
    });
    
    this.bookService.bookDetails('bookId').subscribe(details => {
      console.log('Book Details:', details);
    });
  }
}

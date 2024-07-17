# ApiService

## Summary

The **ApiService** provides a centralized service for making HTTP requests in an Angular application. It leverages `HttpClient` for API interactions and integrates with the `UtilityApiService` for enhanced functionality.

## Features

- Simplified HTTP GET requests using a utility service.
- Easily extendable for other HTTP methods (e.g., POST, PUT, DELETE).

## Constructor

### `constructor(private http: HttpClient)`

Initializes the `ApiService` with Angular's `HttpClient`.

- **Parameters:**
  - `http`: An instance of `HttpClient` for making HTTP requests.

## Methods

### `get(url: string): Observable<any>`

Performs a GET request to the specified URL using the `UtilityApiService`.

- **Parameters:**
  - `url`: The endpoint to fetch data from.

- **Returns:** An observable containing the response from the GET request.

## Example Usage

Here’s an example of how to use the `ApiService` in an Angular component or service:

**example.component.ts**

```typescript
import { Component } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html'
})
export class ExampleComponent {
  constructor(private apiService: ApiService) {
    this.apiService.get('https://api.example.com/data').subscribe(data => {
      console.log('Fetched Data:', data);
    });
  }
}

# UtilityApiService

## Summary

The **UtilityApiService** provides utility functions to simplify HTTP operations in an Angular application. It leverages Angular's `HttpClient` for making GET, POST, PATCH, and file-related requests while managing authentication headers seamlessly.

## Features

- Perform HTTP GET, POST, and PATCH requests with optional access token inclusion.
- Handle file uploads and downloads with appropriate headers.
- Utilize `AuthService` to automatically generate headers for requests.

## Methods

### `get(url: string, addAccessToken: boolean = true)`

Performs a GET request to the specified URL.

- **Parameters:**
  - `url`: The URL to send the GET request to.
  - `addAccessToken`: Indicates whether to include the access token in the headers (default is `true`).

- **Returns:** An Observable of the HTTP response.

### `post<T>(url: string, data: string, addAccessToken: boolean = true)`

Performs a POST request to the specified URL with the provided data.

- **Parameters:**
  - `url`: The URL to send the POST request to.
  - `data`: The data to send with the request.
  - `addAccessToken`: Indicates whether to include the access token in the headers (default is `true`).

- **Returns:** An Observable of type `T` representing the HTTP response.

### `patch<T>(url: string, data: string, addAccessToken: boolean = true)`

Performs a PATCH request to the specified URL with the provided data.

- **Parameters:**
  - `url`: The URL to send the PATCH request to.
  - `data`: The data to send with the request.
  - `addAccessToken`: Indicates whether to include the access token in the headers (default is `true`).

- **Returns:** An Observable of type `T` representing the HTTP response.

### `getFile(url: string, addAccessToken: boolean = true)`

Performs a GET request to download a file from the specified URL.

- **Parameters:**
  - `url`: The URL to send the GET request to.
  - `addAccessToken`: Indicates whether to include the access token in the headers (default is `true`).

- **Returns:** An Observable of the HTTP response.

### `postFile<T>(url: string, data: string, addAccessToken: boolean = true)`

Performs a POST request to upload a file to the specified URL.

- **Parameters:**
  - `url`: The URL to send the POST request to.
  - `data`: The data to send with the request in JSON format.
  - `addAccessToken`: Indicates whether to include the access token in the headers (default is `true`).

- **Returns:** An Observable of type `T` representing the HTTP response.

## Example Usage

Here’s an example of how to use the `UtilityApiService` in an Angular component or service:

**example.component.ts**

```typescript
import { Component } from '@angular/core';
import { UtilityApiService } from 'utility';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html'
})
export class ExampleComponent {
  constructor(private utilityApi: UtilityApiService) {}

  fetchData() {
    this.utilityApi.get('https://api.example.com/data').subscribe(response => {
      console.log('GET Response:', response);
    });
  }

  submitData() {
    const data = JSON.stringify({ name: 'John' });
    this.utilityApi.post('https://api.example.com/data', data).subscribe(response => {
      console.log('POST Response:', response);
    });
  }

  updateData() {
    const data = JSON.stringify({ name: 'Jane' });
    this.utilityApi.patch('https://api.example.com/data/1', data).subscribe(response => {
      console.log('PATCH Response:', response);
    });
  }

  uploadFile() {
    const fileData = JSON.stringify({ file: 'fileContent' });
    this.utilityApi.postFile('https://api.example.com/upload', fileData).subscribe(response => {
      console.log('File Upload Response:', response);
    });
  }
}

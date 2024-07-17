# AuthService

## Summary

The **AuthService** provides utility functions to manage authentication-related tasks in an Angular application. It facilitates retrieving cookie values, generating headers for HTTP requests, and managing user session data.

## Features

- Retrieve user-related information from cookies.
- Generate headers for HTTP requests with optional authentication tokens.
- Support for both regular and file-related headers.

## Methods

### `getCookieValue(cookieName: string): string | undefined`

Retrieves the value of a specified cookie by its name.

- **Parameters:**
  - `cookieName`: The name of the cookie to retrieve.
  
- **Returns:** The value of the cookie if found, otherwise `undefined`.

### `getUserGAID(): string`

Fetches the `userGAID` from cookies.

- **Returns:** The `userGAID` or an empty string if not found.

### `getUserType(): string`

Fetches the `userType` from cookies.

- **Returns:** The `userType` or an empty string if not found.

### `getAccessToken(): string`

Fetches the `accessToken` from cookies.

- **Returns:** The `accessToken` or an empty string if not found.

### `getSessionId(): string`

Fetches the `sessionId` from cookies.

- **Returns:** The `sessionId` or an empty string if not found.

### `getHeaders(post: boolean, addAccessToken: boolean): Object`

Generates headers for HTTP requests.

- **Parameters:**
  - `post`: Indicates if the request is a POST request.
  - `addAccessToken`: Indicates whether to include the access token in the headers.

- **Returns:** An object containing headers.

### `getFileHeaders(post: boolean, addAccessToken: boolean): Object`

Generates headers specifically for file-related HTTP requests.

- **Parameters:**
  - `post`: Indicates if the request is a POST request.
  - `addAccessToken`: Indicates whether to include the access token in the headers.

- **Returns:** An object containing headers with `responseType` set to `arraybuffer`.

## Example Usage

Here’s an example of how to use the `AuthService` in an Angular component or service:

**example.component.ts**

```typescript
import { Component } from '@angular/core';
import { AuthService } from 'utility';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html'
})
export class ExampleComponent {
  constructor() {
    const userGAID = AuthService.getUserGAID();
    const headers = AuthService.getHeaders(true, true);

    console.log('User GAID:', userGAID);
    console.log('Headers:', headers);
  }
}

# Custom Event Service

## Summary

The **Custom Event Service** is a utility class for dispatching custom events in response to server errors in an Angular application. It facilitates error handling by emitting events that can be listened for across the application.

## Features

- Dispatch custom events for specific server error codes.
- Centralized error handling for better maintainability.

## Methods

### `dispatchServerError(errorCode: number, errorMessage: string): void`

Dispatches a custom event when a server error occurs, based on the provided error code.

- **Parameters:**
  - `errorCode`: The HTTP error code received from the server.
  - `errorMessage`: A descriptive message about the error.

### Error Codes Handled

The following error codes will trigger the dispatch of a `ServerError` event:

| Error Code | Description                |
|------------|----------------------------|
| 500        | Internal Server Error      |
| 501        | Not Implemented            |
| 502        | Bad Gateway                |
| 503        | Service Unavailable        |
| 504        | Gateway Timeout            |
| 401        | Unauthorized               |
| 402        | Payment Required           |
| 403        | Forbidden                  |
| 409        | Conflict                   |

### Example Usage

Here’s an example of how to use the `CustomEventService` in an Angular component or service:

**example.component.ts**

```typescript
import { Component } from '@angular/core';
import { CustomEventService } from 'utility';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html'
})
export class ExampleComponent {
  constructor() {
    // Example of dispatching a server error
    CustomEventService.dispatchServerError(500, 'An unexpected error occurred.');
  }

  ngOnInit() {
    // Listen for the custom ServerError event
    window.addEventListener('ServerError', (event: CustomEvent) => {
      console.error('Server Error:', event.detail);
    });
  }
}

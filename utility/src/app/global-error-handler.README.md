# GlobalErrorHandler

## Summary

The **GlobalErrorHandler** is an Angular service that implements the `ErrorHandler` interface to provide centralized error handling across the application. It logs errors and handles specific cases, such as redirecting or reloading the application on certain error statuses.

## Features

- Centralized error logging for better maintainability and debugging.
- Automatically handles specific error codes, such as `302`, to reload the application.

## Methods

### `handleError(error: any): void`

Handles the error encountered in the application.

- **Parameters:**
  - `error`: The error object containing details about the error.

- **Behavior:**
  - Logs the error code to the console.
  - If the error status is `302`, reloads the application.

## Example Usage

To use the `GlobalErrorHandler`, you need to provide it in your Angular module's `providers` array. Here’s an example of how to set it up:

**app.module.ts**

```typescript
import { ErrorHandler } from '@angular/core';
import { GlobalErrorHandler } from 'utility';

@NgModule({
  // other imports...
  providers: [
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler
    },
    // other providers...
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

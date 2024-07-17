# ErrorInterceptor

## Summary

The **ErrorInterceptor** is an Angular HTTP interceptor that intercepts HTTP requests and responses, handling errors globally across the application. It manages retries, timeouts, and specific error processing while dispatching custom events for server errors.

## Features

- Automatically retries failed requests up to two times.
- Sets a timeout for requests to prevent hanging processes.
- Processes and logs errors with specific handling for timeout and server errors.
- Dispatches custom events for server errors using `CustomEventService`.

## Methods

### `intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>`

Intercepts the HTTP request and processes the response.

- **Parameters:**
  - `request`: The outgoing HTTP request.
  - `next`: The next handler in the chain that will process the request.

- **Returns:** An Observable of `HttpEvent<any>` representing the HTTP response.

### `processError(error: HttpErrorResponse): void`

Processes errors received from HTTP responses and dispatches relevant events.

- **Parameters:**
  - `error`: The `HttpErrorResponse` received from the HTTP request.

## Example Usage

To use the `ErrorInterceptor`, you need to provide it in your Angular module's `providers` array. Here’s an example of how to set it up:

**app.module.ts**

```typescript
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from 'utility';

@NgModule({
  imports: [
    HttpClientModule,
    // other imports...
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    },
    // other providers...
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

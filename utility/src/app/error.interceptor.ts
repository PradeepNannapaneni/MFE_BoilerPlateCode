import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, TimeoutError, throwError } from 'rxjs';
import { catchError, retry, tap, timeout } from 'rxjs/operators';
import { CustomEventService } from './services/custom-event.service';

export class ErrorInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request)
            .pipe(
                retry(2),
                timeout(90000),
                tap((response) => {
                    if (response instanceof HttpResponse) {
                        if (response.status === 302) {
                            window.location.reload();
                        }
                    }
                }),
                catchError((error: HttpErrorResponse) => {
                    let errorMessage = '';
                    if(error.error instanceof ErrorEvent) {
                        errorMessage = `Error: ${error.error.message}`;
                    } else {
                        errorMessage = `Error: ${error.status}\nMessage: ${error.message}`;
                    }
                    this.processError(error);
                    return throwError(errorMessage);
                })
            )
    }

    private processError(error: HttpErrorResponse) {
        error instanceof TimeoutError ? CustomEventService.dispatchServerError(504,error?.message) : CustomEventService.dispatchServerError(error?.status, error?.message);
        if (error.status === 0){
            window.location.reload();
        }
    }
}
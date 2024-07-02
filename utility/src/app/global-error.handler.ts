import { ErrorHandler } from "@angular/core";

//@Injectable()

export class GlobalErrorHandler implements ErrorHandler {
    handleError(error: any) {
        console.error('Error Code: ', error);
        if (error.status === 302) {
            console.log('GlobalErrorHandler');
            window.location.reload();
        }
    }
}
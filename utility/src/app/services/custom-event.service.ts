export class CustomEventService {
    static window: Window = window;
    static dispatchServerError(errorCode: number, errorMessage: string) {
        switch (errorCode) {
            case 500: // Internal Server Error
            case 501: // Not Implemented
            case 502: // Bad Gateway
            case 503: // Service Unavailable
            case 504: // Gateway Timeout
            case 401: // Unauthorized
            case 402: // Payment Required
            case 403: // Forbidden
            case 409: // Conflict
                {
                    let customEvent = new CustomEvent('ServerError', {
                        detail: {
                            message: 'something went wrong, please try again',
                            errorCode: errorCode,
                            errorMessage: errorMessage
                        }
                    });
                    this.window.dispatchEvent(customEvent);
                }
                break;
        }
    }
}
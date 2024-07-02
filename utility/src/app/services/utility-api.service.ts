import { HttpClient } from "@angular/common/http";
import { AuthService } from "./auth.service";

export class UtilityApiService {
    constructor(private http: HttpClient) { }

    get(url: string, addAccessToken: boolean = true) {
        return this.http.get(url, AuthService.getHeaders(false, addAccessToken));
    }

    post<T>(url: string, data: string, addAccessToken: boolean = true) {
        return this.http.post<T>(url, AuthService.getHeaders(true, addAccessToken));
    }

    patch<T>(url: string, data: string, addAccessToken: boolean = true) {
        return this.http.patch<T>(url, data, AuthService.getHeaders(false, addAccessToken));
    }

    getFile(url: string, addAccessToken: boolean = true) {
        return this.http.get(url, AuthService.getFileHeaders(true, addAccessToken))
    }

    postFile<T>(url: string, data: string, addAccessToken: boolean = true) {
        return this.http.post<T>(url,
            JSON.stringify({
                ...JSON.parse(data),
                ...AuthService.getHeaders(true, addAccessToken),
            }),
            AuthService.getFileHeaders(true, addAccessToken)
        );
    }
}
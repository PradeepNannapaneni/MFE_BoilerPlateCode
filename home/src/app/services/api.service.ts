import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { UtilityApiService } from "utility";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class ApiService {

    utilityApiService = UtilityApiService;
    constructor(private http: HttpClient) {
        this.utilityApiService = new UtilityApiService(this.http);
    }

    get(url: string) {
        return this.utilityApiService.get(url,false);
    }
}
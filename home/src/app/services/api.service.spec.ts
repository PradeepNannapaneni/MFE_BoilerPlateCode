import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';

describe('ApiService', () => {
    let service: ApiService;

    const mockhttp = jasmine.createSpyObj('HttpClient', {
        get: Promise.resolve()
    });

    const mockApiService = jasmine.createSpyObj('ApiService', {
        get: Promise.resolve()
    });

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                { provide: ApiService, useValue: mockApiService },
                { provide: HttpClient, useValue: mockhttp }
            ]
        });
        service = TestBed.inject(ApiService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

});
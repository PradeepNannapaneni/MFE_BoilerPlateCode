import { HttpClient } from "@angular/common/http";
import { TestBed } from "@angular/core/testing";
import { of } from "rxjs";
import { UtilityApiService } from "./utility-api.service";

describe('UtilityApiService', () => {
    let service: UtilityApiService;
    const mockHttp = jasmine.createSpyObj('UtilityApiService', {
        get: of(),
        post: Promise.resolve(),
        patch: Promise.resolve()
    });

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                { provide: HttpClient, useValue: mockHttp }
            ]
        })
        service = new UtilityApiService(mockHttp);
    });

    it('get should return response', () => {
        expect(service.get('test')).toBeDefined();
    });

    it('post should return response', () => {
        expect(service.post('test', 'test')).toBeDefined();
    });

    it('patch should return response', () => {
        expect(service.patch('test', 'test')).toBeDefined();
    });

    it('postFile should have headers', () => {
        expect(service.postFile('test', JSON.stringify({ 'test': 'test' }))).toBeDefined();
    });

    it('getFile should have headers', () => {
        expect(service.getFile('test')).toBeDefined();
    });


})
import { TestBed } from "@angular/core/testing";
import { AuthService } from "./auth.service";

describe('AuthService', () => {
    beforeEach(() => TestBed.configureTestingModule({}))

    it('getUserGAID should return user GAID', () => {
        expect(AuthService.getUserGAID()).toBeDefined();
    });

    it('getUserType should return user type', () => {
        expect(AuthService.getUserType()).toBeDefined();
    });

    it('getAccessToken should return user access token', () => {
        expect(AuthService.getAccessToken()).toBeDefined();
    });

    it('getSessionId should return session ID', () => {
        expect(AuthService.getSessionId()).toBeDefined();
    });
})
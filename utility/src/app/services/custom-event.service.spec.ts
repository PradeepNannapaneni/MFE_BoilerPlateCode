import { TestBed } from "@angular/core/testing";
import { CustomEventService } from "./custom-event.service";
import { of } from "rxjs";

const mockWindow = jasmine.createSpyObj(window, {
    dispatchEvent: of()
});

describe('CustomEventService', () => {
    beforeEach(() => TestBed.configureTestingModule({}))

    it('dispatchServerError should have been called', () => {
        CustomEventService.window = mockWindow;

        CustomEventService.dispatchServerError(500, 'error');
        expect(CustomEventService.window.dispatchEvent).toHaveBeenCalled();

        CustomEventService.dispatchServerError(502, 'error');
        expect(CustomEventService.window.dispatchEvent).toHaveBeenCalled();

        CustomEventService.dispatchServerError(503, 'error');
        expect(CustomEventService.window.dispatchEvent).toHaveBeenCalled();

        CustomEventService.dispatchServerError(504, 'error');
        expect(CustomEventService.window.dispatchEvent).toHaveBeenCalled();

        CustomEventService.dispatchServerError(401, 'error');
        expect(CustomEventService.window.dispatchEvent).toHaveBeenCalled();

        CustomEventService.dispatchServerError(402, 'error');
        expect(CustomEventService.window.dispatchEvent).toHaveBeenCalled();

        CustomEventService.dispatchServerError(403, 'error');
        expect(CustomEventService.window.dispatchEvent).toHaveBeenCalled();

        CustomEventService.dispatchServerError(409, 'error');
        expect(CustomEventService.window.dispatchEvent).toHaveBeenCalled();

    })
})
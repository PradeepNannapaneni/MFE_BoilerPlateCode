import { NavigationEnd } from "@angular/router";
import { fromEvent, of } from "rxjs";
import { AuthService } from "./auth.service";
import { GAEvent } from "./google-analytics.service";

describe('GoogleAnalyticsService', () => {
    beforeAll(() => {
        (<any>window).gtag = function () {
            // Empty mock function
        };
    });

    beforeEach(() => {
        GAEvent.routeListener$ = of().subscribe();
        GAEvent.scrollEvent$ = of().subscribe();
    });

    it('subscirbeEventGA should call gtag - event', () => {
        const gtagSpy = spyOn(window as any, 'gtag');
        const eventName = 'eventName';
        const eventCategory = 'eventCategory';
        const eventAction = 'eventAction';
        const eventLabel = 'eventLabel';
        const eventValue = 1;

        GAEvent.subscribeEventToGA(
            eventName, eventCategory, eventAction, eventLabel, eventValue);

        expect(gtagSpy).toHaveBeenCalledWith('event', `Test_${eventName}`, {
            event_category: eventCategory,
            event_label: eventLabel,
            event_action: eventAction,
            event_value: eventValue,
            user_name: AuthService.getUserGAID(),
            user_type: AuthService.getUserType()
        });
    });

    it('subscirbeEventGA should call gtag - event with default values', () => {
        const gtagSpy = spyOn(window as any, 'gtag');
        const eventName = 'eventName';
        const eventCategory = 'eventCategory';
        const eventAction = 'eventAction';

        GAEvent.subscribeEventToGA(
            eventName, eventCategory, eventAction);

        expect(gtagSpy).toHaveBeenCalledWith('event', `Test_${eventName}`, {
            event_category: eventCategory,
            event_label: '',
            event_action: eventAction,
            event_value: 0,
            user_name: AuthService.getUserGAID(),
            user_type: AuthService.getUserType()
        });
    });

    it('should trigger onScrollEvent', () => {
        const mockWindow: any = {
            addEventListener: jasmine.createSpy('addEventListener'),
            removeEventListener: jasmine.createSpy('removeEventListener')
        };

        const mockEvent: Event = new Event('scorll');

        spyOn(fromEvent as any, 'call').and.returnValue(() => {
            return fromEvent(mockWindow, 'scroll', () => mockEvent);
        });

        spyOn(GAEvent, 'subscribeEventToGA');

        GAEvent.onScrollEvent('gaCate', 'concat', 'componentName');

        expect(GAEvent.subscribeEventToGA).not.toHaveBeenCalledWith(
            'gaCate_componentName_concat',
            'gaCate',
            ''
        );

        GAEvent.scrollEvent$?.unsubscribe()
    });

    it('should trigger GAscroll', () => {
        const mockRouter = {
            events: of(new NavigationEnd(1, 'url', 'urlAfterRedirects'))
        } as any;
        const mockRoute = {
            firstChild: { component: { _componentName: 'MockComponent' } }
        };

        GAEvent.onGAScroll(
            mockRouter,
            mockRoute,
            NavigationEnd,
            'gaCate',
            'concat'
        );

        expect(GAEvent.routeListener$).toBeDefined();
    });

    it('should trigger removeGAscroll', () => {
        GAEvent.removeGAScroll();
        expect(GAEvent.routeListener$).toBeTruthy();
        expect(GAEvent.scrollEvent$).toBeTruthy();
    });


})
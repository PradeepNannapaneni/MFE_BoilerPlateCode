import { Router } from "@angular/router";
import { Subscription, from, fromEvent } from "rxjs";
import { debounceTime, filter, map } from "rxjs";
import { environment } from "src/environments/environment";
import { AuthService } from "./auth.service";
import { EnvironmentName } from "../enums/environment.enum";

export class GAEvent {
    static routeListener$: Subscription;
    static scrollEvent$: Subscription;

    /** Event Tracking Function
    @param eventName - page_view, page_leave
    @param eventCategory - button
    @param eventAction - user action
    @param eventLabel - button label , input label
    @param eventValue - relative with Event 
    */

    static subscribeEventToGA(
        eventName: string,
        eventCategory: string,
        eventAction: string,
        eventLabel: string = '',
        eventValue: number = 0
    ) {
        if (environment.environmentName === EnvironmentName.Local || environment.environmentName === EnvironmentName.Sit) {
            eventName = `Test_${eventName}`;
        }
        //@ts-ignore
        window.gtag('event', eventName, {
            event_category: eventCategory,
            event_label: eventLabel,
            event_action: eventAction,
            event_value: eventValue,
            user_name: AuthService.getUserGAID(),
            user_type: AuthService.getUserType()
        });
    }

    /** listener diff page scroll event 
     * @param router ng route
     * @param route ng activatedRoute
     * @param NavigationEnd navigate end
     * @param gaCate module name
     * @param concat customized string
     */
    static onGAScroll(router: Router, route: any, NavigationEnd: any, gaCate: string, concat: string) {
        GAEvent.routeListener$ = from(router.events).pipe(
            filter(event => event instanceof NavigationEnd),
            map(() => route.firstChild?.component?._componentName),
        ).subscribe(componentName => {
            if (componentName) {
                GAEvent.onScrollEvent(gaCate, concat, componentName)
            }
        });
    }

    /** scroll event subscribe
     * @param gaCate
     * @param conCat
     * @param componentName
     */
    static onScrollEvent(gaCate: string, conCat: string, componentName: string) {
        GAEvent.scrollEvent$?.unsubscribe();
        GAEvent.scrollEvent$ = fromEvent(window, 'scroll').pipe(
            debounceTime(1000)
        ).subscribe(() => {
            GAEvent.subscribeEventToGA(
                `${gaCate}_${componentName}_${conCat}`,
                gaCate,
                ''
            );
        });
    }

    static removeGAScroll() {
        GAEvent.routeListener$?.unsubscribe();
        GAEvent.scrollEvent$?.unsubscribe();
    }
}
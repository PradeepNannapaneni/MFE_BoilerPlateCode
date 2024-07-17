# GAEvent

## Summary

The **GAEvent** class provides utility functions to manage Google Analytics event tracking in an Angular application. It facilitates tracking user interactions such as page navigation and scroll events, enhancing analytics capabilities.

## Features

- Track user-related events with customizable parameters.
- Automatically prefix event names based on the environment (e.g., local testing).
- Listen to scroll events and report them after a specified debounce time.

## Methods

### `subscribeEventToGA(eventName: string, eventCategory: string, eventAction: string, eventLabel?: string, eventValue?: number): void`

Tracks a specified event with Google Analytics.

- **Parameters:**
  - `eventName`: The name of the event (e.g., page_view).
  - `eventCategory`: The category of the event (e.g., button).
  - `eventAction`: The action performed by the user (e.g., click).
  - `eventLabel`: (Optional) Label for the event (e.g., button label).
  - `eventValue`: (Optional) Numeric value related to the event.

### `onGAScroll(router: Router, route: any, NavigationEnd: any, gaCate: string, concat: string): void`

Listens for route changes and sets up scroll event tracking.

- **Parameters:**
  - `router`: The Angular Router instance.
  - `route`: The ActivatedRoute instance.
  - `NavigationEnd`: The NavigationEnd event type.
  - `gaCate`: Module name for the GA category.
  - `concat`: Customized string to append to the event name.

### `onScrollEvent(gaCate: string, conCat: string, componentName: string): void`

Subscribes to scroll events for the specified component.

- **Parameters:**
  - `gaCate`: GA category.
  - `conCat`: Customized string to append.
  - `componentName`: Name of the component.

### `removeGAScroll(): void`

Unsubscribes from all active GA event listeners to prevent memory leaks.

## Example Usage

Here’s an example of how to use the `GAEvent` class in an Angular component or service:

**example.component.ts**

```typescript
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GAEvent } from 'utility';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html'
})
export class ExampleComponent implements OnInit, OnDestroy {
  constructor(private router: Router) {}

  ngOnInit() {
    GAEvent.onGAScroll(this.router, this.route, NavigationEnd, 'ButtonModule', 'Scroll');
  }

  ngOnDestroy() {
    GAEvent.removeGAScroll();
  }

  someAction() {
    GAEvent.subscribeEventToGA('button_click', 'button', 'click', 'Submit Button', 1);
  }
}

# Date Service

## Summary

The **Date Service** provides utility functions for handling date manipulations in an Angular application. It supports formatting, calculating past dates, validating date formats, and more, utilizing `moment.js` for advanced date operations.

## Features

- Retrieve current and past dates in specified formats.
- Format dates using `moment.js`.
- Calculate time since a given date.
- Validate date formats against predefined patterns.
- Handle date transformations for search parameters.

## Methods

### `getCurrentDate(format?: string, utc?: boolean): string`

Returns the current date, formatted according to the specified format and UTC option.

- **Parameters:**
  - `format`: Optional format string.
  - `utc`: Optional boolean to return date in UTC.

- **Returns:** Current date as a string.

### `formatDate(date: string, format: string): string`

Formats a date string using the provided format.

- **Parameters:**
  - `date`: The date to format.
  - `format`: The format string.

- **Returns:** Formatted date string.

### `getPastDate(noOfDays: number, format?: string, utc?: boolean): string`

Returns a date that is a specified number of days in the past.

- **Parameters:**
  - `noOfDays`: Number of days to go back.
  - `format`: Optional format string.
  - `utc`: Optional boolean for UTC.

- **Returns:** Past date as a string.

### `getPastDateBySeconds(noOfSeconds: number, format?: string, utc?: boolean): string`

Returns a date that is a specified number of seconds in the past.

- **Parameters:**
  - `noOfSeconds`: Number of seconds to go back.
  - `format`: Optional format string.
  - `utc`: Optional boolean for UTC.

- **Returns:** Past date as a string.

### `getDatePart(date: string): string`

Extracts the date part from a string, discarding the time.

- **Parameters:**
  - `date`: The date string.

- **Returns:** Date part as a string.

### `reverseDate(date: string): string`

Reverses a date from `YYYY-MM-DD` format to `DD/MM/YYYY`.

- **Parameters:**
  - `date`: The date string.

- **Returns:** Reversed date as a string.

### `timeSince(date: string, from: string, format: string = 'YYYY-MM-DD hh:mm:ss'): string`

Calculates the time elapsed since a given date.

- **Parameters:**
  - `date`: The reference date.
  - `from`: Optional date to calculate from.
  - `format`: Format of the date string.

- **Returns:** Human-readable time since the date.

### `validateDateFormat(date: string): boolean`

Validates a date string against a predefined regex pattern.

- **Parameters:**
  - `date`: The date string to validate.

- **Returns:** `true` if valid, `false` otherwise.

### `dateDifference(startDateStr: string, endDateStr: string, maxMonthDifference: number): boolean`

Checks if the difference between two dates is within a specified month difference.

- **Parameters:**
  - `startDateStr`: Start date string in `DD/MM/YYYY`.
  - `endDateStr`: End date string in `DD/MM/YYYY`.
  - `maxMonthDifference`: Maximum allowable month difference.

- **Returns:** `true` if the difference is within limits, `false` otherwise.

### `getTodayDate(today: Date): Date`

Resets the time of a given date to midnight.

- **Parameters:**
  - `today`: The date to reset.

- **Returns:** The modified date.

## Example Usage

Here’s an example of how to use the `DateService` in an Angular component:

**example.component.ts**

```typescript
import { Component } from '@angular/core';
import { DateService } from 'utility';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html'
})
export class ExampleComponent {
  currentDate = DateService.getCurrentDate('yyyy-MM-dd');
  pastDate = DateService.getPastDate(5, 'yyyy-MM-dd');

  constructor() {
    console.log('Current Date:', this.currentDate);
    console.log('Past Date:', this.pastDate);
  }

  checkDateDifference() {
    const isWithinLimit = DateService.dateDifference('01/01/2022', '15/02/2022', 2);
    console.log('Date difference within limit:', isWithinLimit);
  }
}

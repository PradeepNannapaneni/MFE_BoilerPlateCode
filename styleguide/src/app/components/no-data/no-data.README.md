# No Data Component
## Summary

The **No Data Component** is an Angular component that displays a message when no data is available to show. It provides a simple and consistent way to inform users about the absence of data.

## Features

- Displays a customizable message indicating that no data is available.
- Easy integration into any part of the Angular application.

## Usage
```html
<app-no-data *ngIf='!data.length'></app-no-data>
```
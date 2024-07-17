# Loader Component

## Summary

The **Loader Component** is an Angular component that provides a visual indication of loading processes in your application. It enhances user experience during data fetching or other asynchronous operations.

## Features

- Simple and customizable loader component.
- Displays a spinner during loading operations.
- Easy integration into various parts of the application.

## Example Usage

To use the `LoaderComponent`, simply include it in your template where loading is needed.

**app.component.html**

```html
<styleguide-loader *ngIf='isLoading'></styleguide-loader>


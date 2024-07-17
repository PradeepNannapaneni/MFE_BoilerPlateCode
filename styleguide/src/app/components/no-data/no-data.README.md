# No Data Component

## Summary

The **No Data Component** is an Angular component that displays a message when there is no data available to show. It helps improve user experience by providing clear feedback in empty states.

## Features

- Simple and customizable component for displaying no data messages.
- Can be easily integrated into various parts of the application.

## Example Usage

To use the `NoDataComponent`, simply include it in your template where data might be absent.

**app.component.html**

```html
<styleguide-no-data *ngIf='!data.length'></styleguide-no-data>
```
# Error Page Component

## Summary

The **Error Page Component** is an Angular component designed to display error messages to users. It provides customizable titles, messages, and contact instructions, making it easy to handle error states in your application.

## Features

- Displays a customizable error title.
- Shows a detailed error message.
- Provides instructions for contacting support.
- Allows navigation back to the home page.

## Inputs

| Input            | Type   | Default Value                | Description                          |
|------------------|--------|------------------------------|--------------------------------------|
| `errorTitle`     | string | `PERMISSION_REQUIRED`        | Title of the error.                 |
| `errorMessage`   | string | `UNAUTHORISED_ERROR_MESSAGE` | Detailed error message.             |
| `contactMessage`  | string | `SERVICE_DESK_TO_ENABLE_ACCESS` | Instructions for contacting support. |

## Methods

### `goToHomePage()`

Redirects the user to the home page.

## Example Usage

To use the `ErrorPageComponent`, simply include it in your template and pass the required inputs.

**app.component.html**

```html
<styleguide-error-page 
  [errorTitle]="'Access Denied'" 
  [errorMessage]="'You do not have permission to view this page.'" 
  [contactMessage]="'Please contact the support team for assistance.'">
</styleguide-error-page>

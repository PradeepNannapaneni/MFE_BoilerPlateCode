# Error Page Component

The **Error Page Component** is an Angular component designed to display user-friendly error messages. It is useful for handling various errors throughout your application and guiding users back to the home page.

## Features

- Displays customizable error title, message, and contact information.
- Provides a button for navigation back to the home page.
- Uses predefined constants for consistent error messaging.

## Usage 
```html
<styleguide-error-page 
  [errorTitle]="'Your Error Title'" 
  [errorMessage]="'Detailed error message here.'" 
  [contactMessage]="'Contact your service desk for assistance.'">
</styleguide-error-page>
```


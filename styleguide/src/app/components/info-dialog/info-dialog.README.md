# Info Dialog Component

## Summary

The **Info Dialog Component** is an Angular component that provides a customizable dialog for displaying informational messages to users. It allows you to present important information along with actions for users to take.

## Features

- Displays a customizable header.
- Shows detailed informational messages.
- Provides a customizable button for user actions.
- Easy integration with Angular Material's dialog system.

## Interface

### `DialogData`

This interface defines the structure of the data passed to the dialog.

| Property       | Type   | Description                      |
|----------------|--------|----------------------------------|
| `infoHeader`   | string | The title of the dialog.        |
| `infoMessage`  | string | The message to display.         |
| `buttonName`   | string | The label for the action button. |

## Component Methods

### `onClose()`

Closes the dialog and returns `true`.

### `onNoClick()`

Closes the dialog without returning any value.

## Example Usage

To use the `InfoDialogComponent`, you can open it using Angular Material's `MatDialog`.

**app.component.ts**

```typescript
import { MatDialog } from '@angular/material/dialog';
import { InfoDialogComponent } from 'styleguide';

constructor(private dialog: MatDialog) {}

openDialog(): void {
  const dialogRef = this.dialog.open(InfoDialogComponent, {
    data: {
      infoHeader: 'Information Header',
      infoMessage: 'This is an informative message.',
      buttonName: 'Okay'
    }
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('Dialog closed:', result);
  });
}

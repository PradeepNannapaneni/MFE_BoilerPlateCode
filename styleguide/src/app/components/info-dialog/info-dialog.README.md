# Info Dialog Component

The **Info Dialog Component** is an Angular component that displays informative messages to users within a dialog interface. It allows customization of the header, message, and button text.

## Features

- Displays a customizable header and message.
- Includes a button to close the dialog.
- Utilizes Angular Material for a consistent design.

## Usage 
```typescript
import { MatDialog } from '@angular/material/dialog';
import { InfoDialogComponent, DialogData } from './path/to/info-dialog.component';

constructor(private dialog: MatDialog) {}

openInfoDialog(): void {
  const dialogData: DialogData = {
    infoHeader: 'Information Title',
    infoMessage: 'This is the detailed information message.',
    buttonName: 'Close'
  };

  const dialogRef = this.dialog.open(InfoDialogComponent, {
    data: dialogData
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('Dialog closed:', result);
  });
}
```
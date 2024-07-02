import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  infoHeader: string;
  infoMessage: string;
  buttonName: string;
}
@Component({
  selector: 'app-info-dialog',
  templateUrl: './info-dialog.component.html'
})

export class InfoDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData, public dialogRef: MatDialogRef<InfoDialogComponent>) { }

  infoHeader: string = this.data.infoHeader;
  infoMessage: string = this.data.infoMessage;
  buttonName: string = this.data.buttonName;

  onClose(): void {
    this.dialogRef.close(true);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

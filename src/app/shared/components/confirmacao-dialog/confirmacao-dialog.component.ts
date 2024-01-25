import { Component, Inject } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmacao-dialog',
  templateUrl: './confirmacao-dialog.component.html',
  styleUrls: ['./confirmacao-dialog.component.css']
})
export class ConfirmacaoDialogComponent {

  constructor(public dialogRef: MatDialogRef<ConfirmacaoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  secondaryClick() {
    this.dialogRef.close({ secondary: true });
  }

  primaryClick() {
    this.dialogRef.close({ primary: true });
  }

  onNoClick(): void {
    this.dialogRef.close({ close: true });
  }
}

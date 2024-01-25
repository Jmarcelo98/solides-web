import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmacaoDialogComponent } from './confirmacao-dialog.component';



@NgModule({
  declarations: [ConfirmacaoDialogComponent],
  exports: [ConfirmacaoDialogComponent],
  imports: [
    CommonModule
  ]
})
export class ConfirmacaoDialogModule { }

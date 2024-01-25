import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumCardComponent } from './album-card.component';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [AlbumCardComponent],
  exports: [AlbumCardComponent],
  imports: [
    CommonModule,
    MatCardModule
  ]
})
export class AlbumCardModule { }

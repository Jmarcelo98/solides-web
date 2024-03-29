import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostCardComponent } from './post-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { ComentarioModule } from '../comentario/comentario.module';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [PostCardComponent],
  exports: [PostCardComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    ComentarioModule,
    MatButtonModule
  ]
})
export class PostCardModule { }

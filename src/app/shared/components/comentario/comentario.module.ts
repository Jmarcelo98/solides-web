import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComentarioComponent } from './comentario.component';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CriarComentarioComponent } from './criar-comentario/criar-comentario.component';
import { UsuarioComentarioComponent } from './usuario-comentario/usuario-comentario.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    ComentarioComponent,
    CriarComentarioComponent,
    UsuarioComentarioComponent
  ],
  exports: [
    ComentarioComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule
  ]
})
export class ComentarioModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumRoutingModule } from './album-routing.module';
import { AlbumComponent } from './album.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { AlbumListComponent } from './album-list/album-list.component';
import { MatIconModule } from '@angular/material/icon';
import { AlbumCardModule } from 'src/app/shared/components/album-card/album-card.module';
import { PaginacaoModule } from 'src/app/shared/components/paginacao/paginacao.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { AlbumVisualizarComponent } from './album-visualizar/album-visualizar.component';
import { AlbumNovoComponent } from './album-novo/album-novo.component';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';


@NgModule({
  declarations: [
    AlbumComponent,
    AlbumListComponent,
    AlbumVisualizarComponent,
    AlbumNovoComponent
  ],
  imports: [
    CommonModule,
    AlbumRoutingModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule,
    AlbumCardModule,
    PaginacaoModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    MatDialogModule,
    MatRadioModule
  ]
})
export class AlbumModule { }

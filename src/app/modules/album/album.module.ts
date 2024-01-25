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
import { NovoAlbumComponent } from './novo-album/novo-album.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { AlbumVisualizarComponent } from './album-visualizar/album-visualizar.component';


@NgModule({
  declarations: [
    AlbumComponent,
    AlbumListComponent,
    NovoAlbumComponent,
    AlbumVisualizarComponent
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
    MatInputModule
  ]
})
export class AlbumModule { }

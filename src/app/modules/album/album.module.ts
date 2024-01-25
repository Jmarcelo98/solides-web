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


@NgModule({
  declarations: [
    AlbumComponent,
    AlbumListComponent,
    NovoAlbumComponent
  ],
  imports: [
    CommonModule,
    AlbumRoutingModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule,
    AlbumCardModule,
    PaginacaoModule
  ]
})
export class AlbumModule { }

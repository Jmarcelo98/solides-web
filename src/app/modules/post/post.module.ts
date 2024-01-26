import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './post.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';
import { PostListComponent } from './post-list/post-list.component';
import { PaginacaoModule } from 'src/app/shared/components/paginacao/paginacao.module';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { PostCardModule } from 'src/app/shared/components/post-card/post-card.module';
import { PostVisualizarComponent } from './post-visualizar/post-visualizar.component';
import { PostNovoComponent } from './post-novo/post-novo.component';


@NgModule({
  declarations: [
    PostComponent,
    PostListComponent,
    PostNovoComponent,
    PostVisualizarComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDividerModule,
    MatTableModule,
    PaginacaoModule,
    MatIconModule,
    MatCardModule,
    PostCardModule,
    MatRadioModule
  ]
})
export class PostModule { }

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
import { NovoPostComponent } from './novo-post/novo-post.component';
import { PaginacaoModule } from 'src/app/shared/components/paginacao/paginacao.module';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    PostComponent,
    PostListComponent,
    NovoPostComponent
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
    MatIconModule
  ]
})
export class PostModule { }

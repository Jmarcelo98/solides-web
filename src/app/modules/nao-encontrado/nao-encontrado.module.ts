import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NaoEncontradoRoutingModule } from './nao-encontrado-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { NaoEncontradoComponent } from './nao-encontrado.component';


@NgModule({
  declarations: [NaoEncontradoComponent],
  imports: [
    CommonModule,
    NaoEncontradoRoutingModule,
    MatIconModule
  ]
})
export class NaoEncontradoModule { }

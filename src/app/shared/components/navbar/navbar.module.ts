import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BotaoLoginComponent } from './botao-login/botao-login.component';
import { BotaoCadastrarComponent } from './botao-cadastrar/botao-cadastrar.component';


@NgModule({
  exports: [
    NavbarComponent
  ],
  declarations: [
    NavbarComponent,
    BotaoLoginComponent,
    BotaoCadastrarComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class NavbarModule { }

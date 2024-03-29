import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { BotaoLoginComponent } from './botao-login/botao-login.component';
import { BotaoCadastrarComponent } from './botao-cadastrar/botao-cadastrar.component';
import { BotaoPerfilComponent } from './botao-perfil/botao-perfil.component';
import { MatDividerModule } from '@angular/material/divider';


@NgModule({
  exports: [
    NavbarComponent
  ],
  declarations: [
    NavbarComponent,
    BotaoLoginComponent,
    BotaoCadastrarComponent,
    BotaoPerfilComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule
  ]
})
export class NavbarModule { }

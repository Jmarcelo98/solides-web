import { Component, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/core/auth/token-storage.service';

@Component({
  selector: 'app-botao-perfil',
  templateUrl: './botao-perfil.component.html',
  styleUrls: ['./botao-perfil.component.css']
})
export class BotaoPerfilComponent {

  constructor(private route: Router, private tokenService: TokenStorageService){}

  @ViewChild('menuTrigger') menuTrigger: MatMenuTrigger;

  redirecionarMeusPosts() {

    this.route.navigate(['/usuario/post/', this.tokenService.getUser() ])
    .then(() => {
      window.location.reload();
    });
    
  }

  redirecionarMeusAlbuns() {

    this.route.navigate(['/usuario/album/', this.tokenService.getUser() ])
    .then(() => {
      window.location.reload();
    });
    
  }

  logout() {
    this.tokenService.logout();
    this.route.navigate(['/login']).then(() => {
      window.location.reload()
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from 'src/app/core/auth/can-active.service';
import { TokenStorageService } from 'src/app/core/auth/token-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private auth: AuthGuardService) { }

  ngOnInit(): void {
    this.usuarioLogado();
  }

  logado: boolean;

  usuarioLogado() {
    this.logado = this.auth.isUsuarioAuthenticated();
  }

}

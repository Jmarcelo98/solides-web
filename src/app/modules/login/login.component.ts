import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';
import { TokenStorageService } from 'src/app/core/auth/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private autenticarService: AuthService, private tokeService: TokenStorageService,
    private route: Router) { }

  formLogin = new FormGroup({
    login: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    senha: new FormControl(null, [Validators.required, Validators.minLength(3)]),
  });

  hide: boolean = true;

  logar() {

    if (this.formLogin.valid) {

      this.autenticarService.logar(this.formLogin.getRawValue()).subscribe(res => {
        console.log(res);

        // this.tokeService.saveToken(res)
        // this.route.navigate([''])

      }, err => {
        console.log(err);

      })

    }

  }

}

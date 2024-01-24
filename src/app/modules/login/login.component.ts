import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/core/auth/token-storage.service';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private autenticarService: AuthService, private tokeService: TokenStorageService,
    private route: Router) {}

  formLogin = new FormGroup({
    login: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    senha: new FormControl(null, [Validators.required, Validators.minLength(3)]),
  });

  hide: boolean = true;

  logar() {

    console.log(this.formLogin.getRawValue());
    

    if(this.formLogin.valid) {

      this.autenticarService.logar(this.formLogin.getRawValue()).subscribe( res => {
        this.tokeService.saveToken(res)
        this.route.navigate([''])

      }, err => {
        console.log(err);
      
      })

    }
    
  }

}

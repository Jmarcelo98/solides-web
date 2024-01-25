import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';
import { UsuarioService } from 'src/app/shared/services/usuario.service';
import { CustomValidations } from 'src/app/shared/utils/custom-validations';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  constructor(private usuarioService: UsuarioService, private route: Router) {

  }

  formRegister = new FormGroup({
    login: new FormControl(null, [Validators.required, Validators.minLength(4)]),
    senha: new FormControl(null, [Validators.required, Validators.minLength(4)]),
    confirmarSenha: new FormControl(null, [Validators.required]),

  }, { validators: CustomValidations.checkPassword });

  hide: boolean = true;

  hideConfirm: boolean = true;



  cadastrar() {

    if (this.formRegister.valid) {
      this.usuarioService.criar(this.formRegister.getRawValue()).subscribe(res => {

        this.route.navigate(['login'])

      })

    }

  }

}

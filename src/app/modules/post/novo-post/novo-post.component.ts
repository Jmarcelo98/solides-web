import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-novo-post',
  templateUrl: './novo-post.component.html',
  styleUrls: ['./novo-post.component.css']
})
export class NovoPostComponent {

  constructor() { }

  formPost = new FormGroup({
    id: new FormControl(null),
    texto: new FormControl(null, [Validators.required]),
    link: new FormControl(null, []),
    imagem: new FormControl(null, [])
  });

  onFileSelected() {
    
  }

  criar() {

    if (this.formPost.valid) {

      //   this.customerService.create(this.formCustomer.getRawValue()).subscribe(suc => {
      //     this.openSnackBar("Cliente cadastrado com sucesso", this.configSuccess);
      //     this.dialogRef.close()

      //     setTimeout(() => {
      //       window.location.reload();
      //     }, 3000);

      //   }, err => {
      //     console.log(err);
      //   })

      // } else {
      //   this.validaCampos(this.formCustomer)
      // }

    }

  }

}
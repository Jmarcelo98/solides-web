import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario-comentario',
  templateUrl: './usuario-comentario.component.html',
  styleUrls: ['./usuario-comentario.component.css']
})
export class UsuarioComentarioComponent {

  @Input()
  usuario: any

}

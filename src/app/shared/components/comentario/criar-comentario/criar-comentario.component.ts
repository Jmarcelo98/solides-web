import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Post } from 'src/app/core/models/interface/Post';
import { ComentarioService } from 'src/app/shared/services/comentario.service';

@Component({
  selector: 'app-criar-comentario',
  templateUrl: './criar-comentario.component.html',
  styleUrls: ['./criar-comentario.component.css']
})
export class CriarComentarioComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private comentarioService: ComentarioService) { }

  @Input()
  post: Post

  comentarioForm!: FormGroup;

  ngOnInit(): void {
    this.comentarioForm = this.formBuilder.group({
      comentario: [null, [Validators.required, Validators.minLength(3)]],
      idPost: [this.post.id, [Validators.required]],
    })
  }

  criarComentario() {

    if (this.comentarioForm.valid) {

      this.comentarioService.criar(this.comentarioForm.getRawValue()).subscribe(res => {

        window.location.reload()

      }, err => {

      })

    }

  }


}

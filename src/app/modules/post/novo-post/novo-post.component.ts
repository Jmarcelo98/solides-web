import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from 'src/app/shared/services/post.service';

@Component({
  selector: 'app-novo-post',
  templateUrl: './novo-post.component.html',
  styleUrls: ['./novo-post.component.css']
})
export class NovoPostComponent {

  constructor(private postService: PostService, private route: Router) { }

  formPost = new FormGroup({
    texto: new FormControl(null, [Validators.required]),
    link: new FormControl(null, []),
    imagem: new FormControl(null, [])
  });

  onFileSelected() {

  }

  criar() {

    if (this.formPost.valid) {

      this.postService.criar(this.formPost.getRawValue()).subscribe(res => {

        this.route.navigate(['post', res])


      }, err => {
        console.log(err);

      })

    }

  }

}
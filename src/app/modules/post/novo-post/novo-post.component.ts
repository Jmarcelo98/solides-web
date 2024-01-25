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

  image: any


  onFileSelected() {

  }

  uploadProfilePicture(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0] as File;
      const reader = new FileReader()
      reader.onload = (e: any) => {

        const bytes = e.target.result.split('base64,')[1]
        this.formPost.controls['imagem'].setValue(bytes)
        // this.updateProfilePictureView()
      }

      reader.readAsDataURL(file)

    }
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
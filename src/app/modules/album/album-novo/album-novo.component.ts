import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlbumService } from 'src/app/shared/services/album.service';

@Component({
  selector: 'app-album-novo',
  templateUrl: './album-novo.component.html',
  styleUrls: ['./album-novo.component.css']
})
export class AlbumNovoComponent implements OnInit {

  formAlbum: FormGroup;

  primeiraPosicaoNull = false

  constructor(private fb: FormBuilder, private albumService: AlbumService, private route: Router) { }

  ngOnInit(): void {

    this.formAlbum = this.fb.group({
      titulo: new FormControl(null, [Validators.required]),
      fotos: this.fb.array([
        {
          imagem: new FormControl(null, [Validators.required])
        }
      ])
    });

  }

  maisFoto() {

    if (this.formArrayFotos.length < 5) {
      const item = this.fb.group({
        imagem: new FormControl(null, [Validators.required])
      });

      this.formArrayFotos.push(item);
    } else {
      alert('Só é permitido 5 fotos por álbum')
    }

  }

  primeiraPosicaoNula() {

    if (this.formArrayFotos.at(0)?.value?.imagem?.errors?.required) {
      this.primeiraPosicaoNull = true;
    } else {
      this.primeiraPosicaoNull = false;
    }
  }

  removerFoto(index: number) {
    this.formArrayFotos.removeAt(index);
  }

  get formArrayFotos() {
    return this.formAlbum.get('fotos') as FormArray;
  }

  uploadProfilePicture(event: any, i: number) {

    if (event.target.files.length > 0) {
      const file = event.target.files[0] as File;
      const reader = new FileReader()
      reader.onload = (e: any) => {

        const bytes = e.target.result.split('base64,')[1]

        this.formArrayFotos.controls[i].patchValue({ "imagem": bytes })

      }

      reader.readAsDataURL(file)

    }

  }

  criar() {

    this.primeiraPosicaoNula();

    if (this.formAlbum.valid && !this.primeiraPosicaoNull) {

      this.albumService.criar(this.formAlbum.getRawValue()).subscribe(res => {

        this.route.navigate(['album', res])

      }, err => {
        console.log(err);

      })

    }

  }

}

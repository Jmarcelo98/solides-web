import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlbumService } from 'src/app/shared/services/album.service';

@Component({
  selector: 'app-novo-album',
  templateUrl: './novo-album.component.html',
  styleUrls: ['./novo-album.component.css']
})
export class NovoAlbumComponent implements OnInit {

  formAlbum: FormGroup;

  constructor(private fb: FormBuilder, private albumService: AlbumService) { }

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

  removerFoto(index: number) {
    this.formArrayFotos.removeAt(index);
  }

  get formArrayFotos() {
    return this.formAlbum.get('fotos') as FormArray;
  }

  get arrayForm() {
    return this.formAlbum.controls["fotos"] as FormArray;
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

    console.log(this.formAlbum.getRawValue());

    // this.formAlbum.valid

    if (false) {

      this.albumService.criar(this.formAlbum.getRawValue()).subscribe(res => {


          console.log(res);
          
        // this.route.navigate(['post', res])

      }, err => {
        console.log(err);

      })

    }

  }

}

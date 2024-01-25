import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Album } from 'src/app/core/models/interface/Album';

@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.css']
})
export class AlbumCardComponent implements OnInit{

  constructor(private domSanitizer: DomSanitizer){}

  @Input()
  album: Album

  image: any;

  ngOnInit(): void {
   this.renderizarImg() 
  }

  renderizarImg() {
    if (this.album.fotos?.at(0) != null) {
      let objectURL = 'data:image/png;base64,' + this.album.fotos?.at(0)?.imagem;
      this.image = this.domSanitizer.bypassSecurityTrustUrl(objectURL);
    } 
  }

}

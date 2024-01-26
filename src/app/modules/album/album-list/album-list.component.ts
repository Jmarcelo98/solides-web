import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Album } from 'src/app/core/models/interface/Album';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {

  constructor(private domSanitizer: DomSanitizer) { }

  @Input()
  listaAlbum: Album[] = []

  ngOnInit(): void {
    this.renderizarImg();
  }

  renderizarImg() {

    for (let o of this.listaAlbum) {

      if (o?.fotos.at(0) != null) {

        let objectURL = 'data:image/png;base64,' + o?.fotos?.at(0)?.imagem;
        o.fotos.at(0).imagem = this.domSanitizer.bypassSecurityTrustUrl(objectURL)

      }

    }

  }

}

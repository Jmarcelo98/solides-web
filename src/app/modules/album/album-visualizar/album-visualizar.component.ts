import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-album-visualizar',
  templateUrl: './album-visualizar.component.html',
  styleUrls: ['./album-visualizar.component.css']
})
export class AlbumVisualizarComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private domSanitizer: DomSanitizer) {
    this.album = this.activatedRoute.snapshot.data.visualizarAlbumResolver;
  }

  active = "active"

  album: any;

  idUsuario: any

  ngOnInit(): void {
    this.renderizarImg();
    console.log(this.album);
    
  }

  mostrarCarouselSemBugar(id: number): string {
    if(id == 0 ) {
      return "active";
    } 
    return "";
  }

  deletar(id: number) {

  }

  renderizarImg() {

    for (let o of this.album.fotos) {

      let objectURL = 'data:image/png;base64,' + o.imagem;

      o.imagem = this.domSanitizer.bypassSecurityTrustUrl(objectURL);

    }

  }

}

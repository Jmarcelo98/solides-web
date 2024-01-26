import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { TokenStorageService } from 'src/app/core/auth/token-storage.service';
import { Album } from 'src/app/core/models/interface/Album';
import { ConfirmacaoDialogComponent } from '../confirmacao-dialog/confirmacao-dialog.component';
import { AlbumService } from '../../services/album.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.css']
})
export class AlbumCardComponent implements OnInit {

  constructor(private domSanitizer: DomSanitizer, private token: TokenStorageService,
    public confirmacao: MatDialog, private albumService: AlbumService, private route: Router) { }

  @Input()
  album: Album

  image: any;

  active = "active"

  idUsuario: any

  ngOnInit(): void {
    this.renderizarImg()
    this.idUsuario = this.token.decodePayloadJWT().id;

  }

  renderizarImg() {

    for (let o of this.album.fotos) {

      let objectURL = 'data:image/png;base64,' + o.imagem;

      o.imagem = this.domSanitizer.bypassSecurityTrustUrl(objectURL);

    }


  }

  mostrarCarouselSemBugar(id: number): string {
    if (id == 0) {
      return "active";
    }
    return "";
  }

  deletar(id: number) {

    const dialogRef = this.confirmacao.open(ConfirmacaoDialogComponent, {
      width: '500px',
      data: {
        title: 'Atenção',
        text: 'Tem certeza que deseja excluir esse álbum?',
        buttons: {
          primary: 'Sim',
          secondary: 'Não',
        }
      },
    });

    dialogRef.afterClosed().subscribe(data => {
      if (data.primary) {

        this.albumService.deletar(id).subscribe(ret => {
          this.route.navigate(['album'])
        })

      }
    });

  }

}

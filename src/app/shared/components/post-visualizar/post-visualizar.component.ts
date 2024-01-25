import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { PostService } from '../../services/post.service';
import { ConfirmacaoDialogComponent } from '../confirmacao-dialog/confirmacao-dialog.component';
import { TokenStorageService } from 'src/app/core/auth/token-storage.service';

@Component({
  selector: 'app-post-visualizar',
  templateUrl: './post-visualizar.component.html',
  styleUrls: ['./post-visualizar.component.css']
})
export class PostVisualizarComponent {

  constructor(private domSanitizer: DomSanitizer,
    public confirmacao: MatDialog, private postService: PostService, private route: Router,
    private token: TokenStorageService) {
  }

  @Input()
  post: any;

  image: any;

  idUsuario: any

  ngOnInit(): void {
    this.idUsuario = this.token.decodePayloadJWT().id;
    this.renderizarImg();
  }

  renderizarImg() {
    if (this.post.imagem != null) {
      let objectURL = 'data:image/png;base64,' + this.post.imagem;
      this.image = this.domSanitizer.bypassSecurityTrustUrl(objectURL);
    }
  }

  deletar(id: number) {

    const dialogRef = this.confirmacao.open(ConfirmacaoDialogComponent, {
      width: '500px',
      data: {
        title: 'Atenção',
        text: 'Tem certeza que deseja excluir esse post?',
        buttons: {
          primary: 'Sim',
          secondary: 'Não',
        }
      },
    });

    dialogRef.afterClosed().subscribe(data => {
      if (data.primary) {

        this.postService.deletar(id).subscribe(ret => {
          this.route.navigate(['post'])
        })

      }
    });

  }

}

import { Component, Input, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/core/auth/token-storage.service';
import { Post } from 'src/app/core/models/interface/Post';
import { ComentarioService } from '../../services/comentario.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmacaoDialogComponent } from '../confirmacao-dialog/confirmacao-dialog.component';

@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.css']
})
export class ComentarioComponent implements OnInit {

  constructor(private token: TokenStorageService, private comentarioService: ComentarioService,
    public confirmacao: MatDialog) { }

  @Input()
  post: Post

  idUsuario: any

  ngOnInit(): void {
    this.idUsuario = this.token.decodePayloadJWT().id;
  }


  deletar(id: number) {

    const dialogRef = this.confirmacao.open(ConfirmacaoDialogComponent, {
      width: '500px',
      data: {
        title: 'Atenção',
        text: 'Tem certeza que deseja excluir esse comentário?',
        buttons: {
          primary: 'Sim',
          secondary: 'Não',
        }
      },
    });

    dialogRef.afterClosed().subscribe(data => {
      if (data.primary) {

        this.comentarioService.deletar(id).subscribe(ret => {
          window.location.reload();
        })

      }
    });

  }

}

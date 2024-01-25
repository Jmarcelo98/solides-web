import { Component, Input } from '@angular/core';
import { Post } from 'src/app/core/models/interface/Post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {

  @Input()
  listaPost: Post[] = []

  public displayedColumns: string[] = ['texto', 'link', 'acao'];

  deletar(id: number) {

  }

  visualizar(id: number) {
    
  }

}

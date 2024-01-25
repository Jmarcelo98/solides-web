import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/core/models/interface/Post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {

  constructor(private route: Router) { }

  @Input()
  listaPost: Post[] = []

  public displayedColumns: string[] = ['texto', 'link', 'acao'];

  deletar(id: number) {

  }

}

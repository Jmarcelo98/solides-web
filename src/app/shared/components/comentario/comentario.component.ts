import { Component, Input, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/core/auth/token-storage.service';
import { Post } from 'src/app/core/models/interface/Post';

@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.css']
})
export class ComentarioComponent implements OnInit{

  constructor(private token: TokenStorageService) { }
 
  @Input()
  post: Post

  ngOnInit(): void {
   console.log(this.token.getUser());
   
  }


  deletar(id: number) {

  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/core/models/Post';
import { PostService } from 'src/app/shared/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts: Post[] = [];

  constructor(private activatedRoute: ActivatedRoute, private postService: PostService) {
    this.posts = this.activatedRoute.snapshot.data.postResolve as Post[];
  }


  formFiltro = new FormGroup({
    texto: new FormControl(null, []),
    link: new FormControl(null, []),
    id: new FormControl(null, []),
  });


  ngOnInit(): void {
  }

  filtrar() {

    this.postService.buscarTodos(this.formFiltro.getRawValue()).subscribe(res => {
      console.log(res);

      // this.posts = res

    }, err => {
      console.log(err);

    })

  }


}

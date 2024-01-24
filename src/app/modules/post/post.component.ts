import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/core/models/Post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  post: Post[] = [];

  constructor(private activatedRoute: ActivatedRoute) {
    this.post = this.activatedRoute.snapshot.data.postResolve as Post[];
  }


  formFiltro = new FormGroup({
    texto: new FormControl(null, []),
    link: new FormControl(null, []),
    id: new FormControl(null, []),
  });


  ngOnInit(): void {
  }

  filtrar() {

  }


}

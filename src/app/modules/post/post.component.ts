import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Paginator } from 'src/app/core/models/interface/Paginator';
import { IPaginator } from 'src/app/shared/components/paginacao/paginacao.component';
import { PostService } from 'src/app/shared/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts: any;

  constructor(private activatedRoute: ActivatedRoute, private postService: PostService) {
    this.posts = this.activatedRoute.snapshot.data.postResolve;
    console.log(this.posts);
    
  }

  formFiltro = new FormGroup({
    texto: new FormControl(null, []),
    link: new FormControl(null, []),
    id: new FormControl(null, []),
  });

  paginator: Paginator = {
    pageIndex: 0,
    totalElements: 0,
    pageSize: 5,
  }

  ngOnInit(): void {

    this.paginator.pageIndex = this.posts.number;
    this.paginator.totalElements = this.posts.totalElements;
  }

  filtrar() {

    this.postService.buscarTodos(this.formFiltro.getRawValue(), this.paginator).subscribe(res => {
      console.log(res);
      this.paginator.pageIndex = res.number;
      this.paginator.totalElements = res.totalElements;
      this.posts = res

    }, err => {
      console.log(err);

    })

  }

  public pageClick(paginator?: IPaginator) {
    this.paginator = paginator!;
    this.filtrar();
  }

}

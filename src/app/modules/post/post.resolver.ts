import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { Paginator } from 'src/app/core/models/interface/Paginator';
import { Post } from 'src/app/core/models/interface/Post';
import { PostService } from 'src/app/shared/services/post.service';

@Injectable({
  providedIn: 'root'
})
export class PostResolver implements Resolve<Post[]> {

  constructor(private postService: PostService) { }

  paginator: Paginator = {
    pageIndex: 0,
    totalElements: 0,
    pageSize: 5,
  }

  formFiltro = new FormGroup({
    texto: new FormControl(null),
    link: new FormControl(null),
    id: new FormControl(null),
  });

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any[]> {
    return this.postService.buscarTodos(this.formFiltro.getRawValue(), this.paginator);
  }
}

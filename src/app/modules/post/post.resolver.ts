import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Post } from 'src/app/core/models/Post';
import { PostService } from 'src/app/shared/services/post.service';

@Injectable({
  providedIn: 'root'
})
export class PostResolver implements Resolve<Post[]> {

  constructor(private postService: PostService) { }

  formFiltro = new FormGroup({
    texto: new FormControl(null),
    link: new FormControl(null),
    id: new FormControl(null),
  });

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Post[]> {
    return this.postService.buscarTodos(this.formFiltro);
  }
}

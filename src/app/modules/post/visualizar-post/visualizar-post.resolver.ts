import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Post } from 'src/app/core/models/interface/Post';
import { PostService } from 'src/app/shared/services/post.service';

@Injectable({
  providedIn: 'root'
})

export class VisualizarPostResolver implements Resolve<Post> {

  constructor(private postService: PostService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Post> {
    console.log(this.postService.buscarPorId(Number(route.params.id)));
    
    return this.postService.buscarPorId(Number(route.params.id))
  }
}

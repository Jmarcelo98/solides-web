import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { Album } from 'src/app/core/models/interface/Album';
import { Paginator } from 'src/app/core/models/interface/Paginator';
import { Post } from 'src/app/core/models/interface/Post';
import { AlbumService } from 'src/app/shared/services/album.service';
import { PostService } from 'src/app/shared/services/post.service';

@Injectable({
  providedIn: 'root'
})
export class AlbumResolver implements Resolve<Album[]> {

  constructor(private albumService: AlbumService) { }

  paginator: Paginator = {
    pageIndex: 0,
    totalElements: 0,
    pageSize: 6,
  }

  formFiltro = new FormGroup({
    texto: new FormControl(null),
    link: new FormControl(null),
    id: new FormControl(null),
  });

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any[]> {
    return this.albumService.buscarTodos(this.paginator);
  }
}

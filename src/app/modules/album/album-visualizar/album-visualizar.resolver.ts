import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { Album } from 'src/app/core/models/interface/Album';
import { AlbumService } from 'src/app/shared/services/album.service';

@Injectable({
  providedIn: 'root'
})

export class AlbumVisualizarResolver implements Resolve<Album> {

  constructor(private albumService: AlbumService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.albumService.buscarPorId(Number(route.params.id))
  }
}

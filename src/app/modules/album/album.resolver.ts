import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { Album } from 'src/app/core/models/interface/Album';
import { Paginator } from 'src/app/core/models/interface/Paginator';
import { AlbumService } from 'src/app/shared/services/album.service';

@Injectable({
  providedIn: 'root'
})
export class AlbumResolver implements Resolve<Album[]> {

  constructor(private albumService: AlbumService) { }

  paginator: Paginator = {
    pageIndex: 0,
    totalElements: 0,
    pageSize: 4,
  }

  formFiltro = new FormGroup({
    titulo: new FormControl(null),
    meusAlbuns: new FormControl(null),
  });

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any[]> {
    return this.albumService.buscarTodos(this.formFiltro.getRawValue(),this.paginator);
  }
}

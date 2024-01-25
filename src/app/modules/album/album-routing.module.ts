import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumComponent } from './album.component';
import { AlbumResolver } from './album.resolver';
import { NovoAlbumComponent } from './novo-album/novo-album.component';
import { AuthGuardService } from 'src/app/core/auth/can-active.service';
import { AlbumVisualizarComponent } from './album-visualizar/album-visualizar.component';

const routes: Routes = [
  {
    path: '',
    component: AlbumComponent,
    resolve: {
      albumResolver: AlbumResolver
    }
  },
  {
    path: 'novo',
    component: NovoAlbumComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: ':id',
    component: AlbumVisualizarComponent,
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlbumRoutingModule { }

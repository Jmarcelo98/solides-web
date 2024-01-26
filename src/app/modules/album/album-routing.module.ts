import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumComponent } from './album.component';
import { AlbumResolver } from './album.resolver';
import { AuthGuardService } from 'src/app/core/auth/can-active.service';
import { AlbumVisualizarComponent } from './album-visualizar/album-visualizar.component';
import { AlbumNovoComponent } from './album-novo/album-novo.component';
import { AlbumVisualizarResolver } from './album-visualizar/album-visualizar.resolver';

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
    component: AlbumNovoComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: ':id',
    component: AlbumVisualizarComponent,
    // canActivate: [AuthGuardService],
    resolve: {
      visualizarAlbumResolver: AlbumVisualizarResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlbumRoutingModule { }

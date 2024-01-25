import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './core/auth/can-active.service';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule),
  },
  {
    path: 'post',
    loadChildren: () => import('./modules/post/post.module').then(m => m.PostModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'album',
    loadChildren: () => import('./modules/album/album.module').then(m => m.AlbumModule),
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./modules/cadastro/cadastro.module').then(m => m.CadastroModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

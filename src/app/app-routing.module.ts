import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule),
  },
  {
    path: 'post',
    loadChildren: () => import('./modules/post/post.module').then(m => m.PostModule),
  },
  {
    path: 'album',
    loadChildren: () => import('./modules/album/album.module').then(m => m.AlbumModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

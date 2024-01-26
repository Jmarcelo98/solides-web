import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './post.component';
import { PostResolver } from './post.resolver';
import { PostVisualizarResolver } from './post-visualizar/post-visualizar.resolver';
import { PostCardComponent } from 'src/app/shared/components/post-card/post-card.component';
import { PostNovoComponent } from './post-novo/post-novo.component';
import { AuthService } from 'src/app/core/auth/auth.service';
import { AuthGuardService } from 'src/app/core/auth/can-active.service';

const routes: Routes = [
  {
    path: '',
    component: PostComponent,
    canActivate: [AuthGuardService],
    resolve: {
      postResolve: PostResolver
    }
  },
  {
    path: 'novo',
    component: PostNovoComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: ':id',
    component: PostCardComponent,
    canActivate: [AuthGuardService],
    resolve: {
      visualizarPostResolver: PostVisualizarResolver
    }
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }

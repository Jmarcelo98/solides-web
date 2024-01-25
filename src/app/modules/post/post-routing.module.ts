import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './post.component';
import { PostResolver } from './post.resolver';
import { NovoPostComponent } from './novo-post/novo-post.component';

const routes: Routes = [
  {
    path: '',
    component: PostComponent,
    resolve: {
      postResolve: PostResolver
    }
  },
  {
    path: 'novo',
    component: NovoPostComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }

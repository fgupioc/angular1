import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PostComponent} from './components/post/post.component';
import {PostsComponent} from './components/posts/posts.component';
import {NuevoPostComponent} from './components/nuevo-post/nuevo-post.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'posts',
    pathMatch: 'full'
  },
  {
    path: 'post',
    component: PostComponent
  },
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'nuevo-post',
    component: NuevoPostComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

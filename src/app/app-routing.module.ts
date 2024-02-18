import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovieDetailesComponent } from './movie-detailes/movie-detailes.component';
import { ActordetailesComponent } from './actordetailes/actordetailes.component';
import { NowPlayingComponent } from './movies-list/now-playing/now-playing.component';
import { PopularMoviesComponent } from './movies-list/popular-movies/popular-movies.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'movie-detailes/:id',component:MovieDetailesComponent},
  {path:'detailes',component:MovieDetailesComponent},
  {path:'movies/id',component:HomeComponent},
  { path: 'new', component: NowPlayingComponent },
  { path: 'actordetailes/:id', component: ActordetailesComponent },
  { path: 'popularMovies', component: PopularMoviesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

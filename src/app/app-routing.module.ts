import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovieDetailesComponent } from './movie-detailes/movie-detailes.component';
import { ActordetailesComponent } from './actordetailes/actordetailes.component';
import { NowPlayingComponent } from './movies-list/now-playing/now-playing.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'movie-detailes/:id',component:MovieDetailesComponent},
  {path:'detailes',component:MovieDetailesComponent},
  {path:'movies/id',component:HomeComponent},
  { path: 'new', component: NowPlayingComponent },
  // { path: 'top', component: TopRatedComponent },
  // { path: 'languagewise', component: LanguageComponent },
  { path: 'actordetailes/:id', component: ActordetailesComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

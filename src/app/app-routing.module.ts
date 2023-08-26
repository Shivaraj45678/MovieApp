import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovieDetailesComponent } from './movie-detailes/movie-detailes.component';
import { NewMoviesComponent } from './movielist/new-movies/new-movies.component';
import { TopRatedComponent } from './movielist/top-rated/top-rated.component';
import { LanguageComponent } from './movielist/language/language.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'movie-detailes/:id',component:MovieDetailesComponent},
  {path:'detailes',component:MovieDetailesComponent},
  {path:'movies/id',component:HomeComponent},
  { path: 'new', component: NewMoviesComponent },
  { path: 'top', component: TopRatedComponent },
  { path: 'languagewise', component: LanguageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

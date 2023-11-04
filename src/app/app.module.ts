import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {CommonModule} from '@angular/common';
// import { Top100Component } from './moviesdata/top100/top100.component';
// import { MovieDetailesComponent } from './movie-detailes/movie-detailes.component';
import { HomeComponent } from './home/home.component';
import { MovieDetailesComponent } from './movie-detailes/movie-detailes.component';

import { ActordetailesComponent } from './actordetailes/actordetailes.component';
import { NowPlayingComponent } from './movies-list/now-playing/now-playing.component';
import { PopularMoviesComponent } from './movies-list/popular-movies/popular-movies.component';
import { TopRatedMoviesComponent } from './movies-list/top-rated-movies/top-rated-movies.component';
import { UpcomingMoviesComponent } from './movies-list/upcoming-movies/upcoming-movies.component';

// import { YouTubePlayer } from '@angular/youtube-player';
// import { LoadingSpinnerModule } from 'ngx-loading-spinner';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieDetailesComponent,

    ActordetailesComponent,
    NowPlayingComponent,
    PopularMoviesComponent,
    TopRatedMoviesComponent,
    UpcomingMoviesComponent,

  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

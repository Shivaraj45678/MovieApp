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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActordetailesComponent } from './actordetailes/actordetailes.component';
import { NowPlayingComponent } from './movies-list/now-playing/now-playing.component';
import { PopularMoviesComponent } from './movies-list/popular-movies/popular-movies.component';
import { TopRatedMoviesComponent } from './movies-list/top-rated-movies/top-rated-movies.component';
import { UpcomingMoviesComponent } from './movies-list/upcoming-movies/upcoming-movies.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatGridList } from '@angular/material/grid-list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
// import { LoadingComponent } from './loader/loading/loading.component';
import {MatIconModule} from '@angular/material/icon';
import { NavbarComponent } from './reusable_components/navbar/navbar.component';
import { FooterComponent } from './reusable_components/footer/footer.component';
import { DefaultmovieslayoutComponent } from './reusable_components/defaultmovieslayout/defaultmovieslayout.component';
import { ToastsComponent } from './reusable_components/toasts/toasts.component';
import {MatCardModule} from '@angular/material/card';
import { LoaderComponent } from './reusable_components/loader/loader.component';
import { MoviesComponent } from './list/movies/movies.component';
import { WebSeriesComponent } from './list/web-series/web-series.component';
import {MatSelectModule} from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatExpansionModule} from '@angular/material/expansion';

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
    // LoadingComponent,
    NavbarComponent,
    FooterComponent,
    DefaultmovieslayoutComponent,
    ToastsComponent,
    LoaderComponent,
    MoviesComponent,
    WebSeriesComponent,

  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatCardModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatExpansionModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

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

// import { YouTubePlayerModule } from '@angular/youtube-player';
// import { YouTubePlayerModule } from '@angular/youtube-player';
// import { YoutubePlayerModule } from 'ngx-youtube-player';

@NgModule({
  declarations: [
    AppComponent,
    // Top100Component,
    // MovieDetailesComponent,
    HomeComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    // YoutubePlayerModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

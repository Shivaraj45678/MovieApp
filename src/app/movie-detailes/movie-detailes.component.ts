import { Component, OnInit } from '@angular/core';
import { MovieserviceService } from '../services/movieservice.service';
import { Movie } from '../model';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-movie-detailes',
  templateUrl: './movie-detailes.component.html',
  styleUrls: ['./movie-detailes.component.css'],
})
export class MovieDetailesComponent implements OnInit {


  sanitizedVideoUrl: SafeResourceUrl = '';
  videos: any[] = [];
  movieDetailes: any;
  movies: Movie[];
  mainVideo: any;
  additionalVideos: any[] = [];
  reviews: any;
  image: any;
  cast: any;
  imdbid: any;
  similarmovie: any;

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

  // images: any;
  constructor(
    private movieservice: MovieserviceService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private router: Router
  ) {
    this.movies = this.movieservice.getMovies();
    console.log(this.movies);
  }
  navigateToActorDetailes(id: string) {
    this.router.navigate(['/actordetailes', id]);
  }

  fetchTrailer() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.movieservice.getMovieVideos(id).subscribe(
        (res) => {
          this.videos = res.results;
          console.log(this.videos);
          this.mainVideo = this.videos.find(
            (video) => video.type === 'Trailer'
          );
          console.log(this.mainVideo);
          if (this.mainVideo && this.mainVideo.key) {
            const videoUrl = `https://www.youtube.com/embed/${this.mainVideo.key}`;
            this.sanitizedVideoUrl =
              this.sanitizer.bypassSecurityTrustResourceUrl(videoUrl);
          }
        },
        (error) => {
          // Handle error
        }
      );
    }
  }
  fetchReview() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.movieservice.MovieReviews(id).subscribe((res) => {
        this.reviews = res.results;
        console.log(this.reviews);
      });
    }
  }



  getCast() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.movieservice.moviecast(id).subscribe((data) => {
        // Filter out cast members with image URLs
        this.cast = data.cast.filter(
          (member: { profile_path: null }) => member.profile_path !== null
        );

        console.log(this.cast);
      });
    }
  }

  //   ReadMore(id: string) {
  //     this.movieservice.getMovieByID(id).subscribe((data: any) => {
  //       this.Details = [];
  //       for (let detail in data) {
  //         let actors = data["Actors"]
  // let obj =new MoreDetailed(actors)
  // this.Details.push(obj);
  // console.log()
  // console.log("details: ", actors)

  //       }
  //     })

  //   }
  ngOnInit(): void {
    // this.fetchImages();
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.movieservice.getMovieByID(id).subscribe((data: any) => {
        this.movieDetailes = data;
        this.movieservice.getmovieByImdb(this.movieDetailes.imdb_id).subscribe((data: any) => {
            this.imdbid = data;
            console.log('testing', this.imdbid);
          });

              this.movieservice.MovieImages(this.movieDetailes.imdb_id).subscribe((data) => {
                this.image = data;
                console.log(this.image);
              });

      });
      this.fetchTrailer();
      this.fetchReview();
      this.getCast();
      this.getmoviesbySimilar(id);
    }
  }

  getmoviesbySimilar(id:string){
this.movieservice.getMoviesBySimilar(id).subscribe((data)=>{
  console.log(data)
  this.similarmovie=data.results
})
  }
}

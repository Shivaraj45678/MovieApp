import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie, Video } from 'src/app/model';
import { MovieserviceService } from 'src/app/services/movieservice.service';
import { SortedMoviesListService } from 'src/app/services/sorted-movies-list.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  title = 'movieapp';
  selected:any;
  movieId: any;
  videos: Video[] = [];
  // text="string";
  query: any;
  movies: any[] = [];
  Details: any[] = [];
  data: any;
  movieService: any;
  carousel: any;
  constructor(private movieservice: MovieserviceService,
    private sortMovies:SortedMoviesListService,
   private router:Router,private route:ActivatedRoute) { }
   navigateToDetailes(id:string){
this.router.navigate(['/movie-detailes',id])
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

hi() {
  // Check if the query has a value before making the API call
  if (this.query.trim() !== '') {
    this.movieservice.SearchMovie(this.query).subscribe((data: any) => {
      console.log(data);
      this.movies = [];
      for (let movie of data.results) {
        let id = movie.id;
        let title = movie.original_title;
        let url = movie.poster_path;
        let year = movie.release_date;
        let type = movie.media_type;

        let obj = new Movie(id, title, url, year, type);

        this.movies.push(obj);
        console.log("movie: ", movie, this.selected);
      }
      this.movieservice.setMovies(this.movies);
      console.log("list,", this.movies);
    });
  }
}

  // console.log(movie.originalTitleText?.text)



  // hlo() {
  //   this.movieservice.getData().subscribe((data: any) => {
  //     // this.data=data.Array;
  //     this.data = data;

  //   })
  // }
  ngOnInit(): void {
    // this.movieservice.Movie().subscribe((data:any)=>{
    //   console.log(data)
    //   this.data=data.results;
    //   console.log(data)
    this.getMovies(1);
// console.log()
  // this.route.paramMap.subscribe(params => {
  //   this.movieId = +params.get('id');
  //   this.fetchMovieDetails();
  //   });
  }
  // fetchTrailer() {
  //   this.movieservice.getMovieVideos(this.movieId).subscribe(response => {
  //   this.videos = response.results;
  //   });
  //   }
  getMovies(page:number){
  this.sortMovies.getNowPlayingMovies(page).subscribe((res:any)=>{
    this.carousel=res.results
    console.log(this.carousel)

  })
  }

}

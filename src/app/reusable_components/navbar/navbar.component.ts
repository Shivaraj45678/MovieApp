import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie, Video } from 'src/app/model';
import { MovieserviceService } from 'src/app/services/movieservice.service';
import { SortedMoviesListService } from 'src/app/services/sorted-movies-list.service';
import { ToastsComponent } from '../toasts/toasts.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @ViewChild('toast') toastComponent!: ToastsComponent;

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
  moviefind: any;
  movie: any;
  movieDetailes: any;
  // url: this;
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
//     })7


//   }

hi() {
  if (this.query.trim() !== '') {
    this.movieservice.SearchMovie(this.query).subscribe((data: any) => {
      console.log(data);
      // Filter out movies with null poster_path and null profile_path
      this.movies = data.results.filter((movie: { poster_path: null; profile_path: null; }) => movie.poster_path !== null && movie.profile_path !== null);

      if (this.movies.length === 0) {
        const messageElement = document.getElementById("message");
        if (messageElement !== null) {
          messageElement.innerHTML = "No Movie Found !";
        }
      } else {
        // Clear the message when movies are found
        const messageElement = document.getElementById("message");
        if (messageElement !== null) {
          messageElement.innerHTML = "";
        }
      }
    });
  }
}



// showToast(message: string) {
//     this.toastComponent.message = message;
//     this.toastComponent.showtoast();
//     setTimeout(() => this.toastComponent.hideToast(), 5000); // Hide toast after 5 seconds
//   }

  // console.log(movie.originalTitleText?.text)



  // hlo() {
  //   this.movieservice.getData().subscribe((data: any) => {
  //     // this.data=data.Array;
  //     this.data = data;

  //   })
  // }
  ngOnInit(): void {
    const id =this.route.snapshot.paramMap.get('id');
    if (id !== null) {
    this.movieservice.getMovieByID(id).subscribe((data:any)=>{
      this.movieDetailes=data;
      console.log(this.movieDetailes)

  //     this.mdata=[];
  //     for(let item of data){
  // let detail=data[]
  //     }
      console.log(this.movieDetailes)
    });
  }
  // fetchTrailer() {
  //   this.movieservice.getMovieVideos(this.movieId).subscribe(response => {
  //   this.videos = response.results;
  //   });
  //   }
  // getMovies(page:number){
  // this.sortMovies.getNowPlayingMovies(page).subscribe((res:any)=>{
  //   this.carousel=res.results
  //   console.log(this.carousel)

  // })
  // }

}}

import { Component, OnInit } from '@angular/core';
import { MovieserviceService } from '../services/movieservice.service';
import { Movie } from '../model';
import { Router } from '@angular/router';
import {Video} from '../model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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
  constructor(private movieservice: MovieserviceService,
   private router:Router,private route:ActivatedRoute) { }
   navigateToDetailes(id:string){
    // this.movies = [];
    // console.log("hello",this.movies)

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
    this.movieservice.SearchMovie(this.query).subscribe((data: any) => {
      console.log(data)
      this.movies = [];
      for (let movie of data.Search) {
        let id = movie.imdbID;
        let title = movie.Title;
        let url = movie.Poster;
        let year = movie.Year;
        let type = movie.Type;

        let obj = new Movie(id, title, url, year, type);

        this.movies.push(obj);
        console.log("movie: ", movie,this.selected)
      }
      this.movieservice.setMovies(this.movies);
      console.log("list,", this.movies)

    })
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

console.log(this.selected)
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

}

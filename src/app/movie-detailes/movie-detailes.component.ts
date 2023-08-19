import { Component, OnInit,Input } from '@angular/core';
import { MovieserviceService } from '../services/movieservice.service';
import { Mdata } from '../model';
import { Movie } from '../model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-movie-detailes',
  templateUrl: './movie-detailes.component.html',
  styleUrls: ['./movie-detailes.component.css']
})
export class MovieDetailesComponent implements OnInit {
// MData:Mdata[];
  videos:any[]=[];
  movieDetailes:any;
  movies:Movie[];
  mainVideo: any;
  navigateToDetailes:any;
  additionalVideos: any;
  reviews: any;
  image: any;
  mdata: any[] = [];
  fun: any;
  fun2: any;
  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }
  // images: any;
  constructor(private movieservice: MovieserviceService,
    private route:ActivatedRoute) {
      this.movies=this.movieservice.getMovies();
      console.log(this.movies)
      this.images();

    }
  fetchTrailer(){
    const id =this.route.snapshot.paramMap.get('id');
    if (id !== null) {
    this.movieservice.getMovieVideos(id).subscribe(
      res=>{
        this.videos=res.results;
        // this.mainVideo=this.videos[0];
        this.additionalVideos=this.videos.slice(0,5);
        // this.additionalVideos=this.videos;
        console.log(this.additionalVideos)
      }
      )}
    }
    fetchReview(){
    const id =this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.movieservice.MovieReviews(id).subscribe(
        res=>{
          this.reviews=res.results;
          console.log(this.reviews)
        }
      )
    }
  }
//     fetchImages(){
//     const id =this.route.snapshot.paramMap.get('id');
// this.movieservice.MovieImages(id).subscribe(
//   data=>{
// this.images=data;
//     console.log(this.images)
//   }
// )

//     }
images(){
  const id =this.route.snapshot.paramMap.get('id');
  if (id !== null) {
  this.movieservice.MovieImages(id).subscribe(
    data=>{
      this.image=data;
      // this.fun2=data.genres[].name;
      // console.log(this.fun2);
      console.log(this.image)
  }
)}
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
  const id =this.route.snapshot.paramMap.get('id');
  if (id !== null) {
  this.movieservice.getMovieByID(id).subscribe((data:any)=>{
    this.movieDetailes=data;
    console.log(this.movieDetailes)
    this.fun=data.Awards;
    console.log(this.fun)
//     this.mdata=[];
//     for(let item of data){
// let detail=data[]
//     }
    console.log(this.movieDetailes)
  });
  console.log(this.movies)

  this.fetchTrailer();
  this.fetchReview();
}}

// hi(){
//   this.sharedData=this.movieservice.getDataFrom();
// console.log(this.sharedData)
// }
}

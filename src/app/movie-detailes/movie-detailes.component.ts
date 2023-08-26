import { Component, OnInit } from '@angular/core';
import { MovieserviceService } from '../services/movieservice.service';
import { Movie } from '../model';
import {ActivatedRoute, Router} from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-movie-detailes',
  templateUrl: './movie-detailes.component.html',
  styleUrls: ['./movie-detailes.component.css']
})
export class MovieDetailesComponent implements OnInit {
// MData:Mdata[];
videoId = 'QIZ9aZD6vs0';

  sanitizedVideoUrl: SafeResourceUrl='';
  videos:any[]=[];
  movieDetailes:any;
  movies:Movie[];
  mainVideo: any;
  // navigateToDetailes:any;
  additionalVideos: any[] = [];
  reviews: any;
  image: any;
  mdata: any[] = [];
  fun: any;
  fun2: any;
  cast: any;

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }


  // images: any;
  constructor(private movieservice: MovieserviceService,
    private route:ActivatedRoute,private sanitizer: DomSanitizer,private router:Router) {
      this.movies=this.movieservice.getMovies();
      console.log(this.movies)
      this.images();

    }

    fetchTrailer() {
      const id = this.route.snapshot.paramMap.get('id');
      if (id !== null) {
        this.movieservice.getMovieVideos(id).subscribe(
          res => {
            this.videos = res.results;
            console.log(this.videos)
            this.mainVideo = this.videos.find(video => video.type === 'Trailer');
console.log(this.mainVideo)
            if (this.mainVideo && this.mainVideo.key) {
              const videoUrl = `https://www.youtube.com/embed/${this.mainVideo.key}`;
              this.sanitizedVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(videoUrl);
            }
          },
          error => {
            // Handle error
          }
        );
      }}
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

getCast() {
  const id = this.route.snapshot.paramMap.get('id');
  if (id !== null) {
    this.movieservice.moviecast(id).subscribe(
      data => {
        // Filter out cast members with image URLs
        this.cast = data.cast.filter((member: { profile_path: null; }) => member.profile_path !== null);

        console.log(this.cast);
      }
    );
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
  this.getCast();
}}

navigateToDetailes(id:string){
  this.movies = [];
  console.log("hello",this.movies)

this.router.navigate(['/movie-detailes',id])
 }
// hi(){
//   this.sharedData=this.movieservice.getDataFrom();
// console.log(this.sharedData)
// }
}

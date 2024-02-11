import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieserviceService } from 'src/app/services/movieservice.service';
import { SortedMoviesListService } from 'src/app/services/sorted-movies-list.service';

@Component({
  selector: 'app-defaultmovieslayout',
  templateUrl: './defaultmovieslayout.component.html',
  styleUrls: ['./defaultmovieslayout.component.css']
})
export class DefaultmovieslayoutComponent {
topmovies: any;
  upcommingmovies: any;
  nowplyingmovies: any;
  movies: any;
constructor(private service:SortedMoviesListService,private router:Router,private route:ActivatedRoute){}
navigateToDetailes(id:string){
  this.router.navigate(['/movie-detailes',id])
     }
ngOnInit(){
this.fetchNowPlayingMovies();
this.fetchTopRatedMovies();
this.fetchUpcommingMovies();
}
fetchTopRatedMovies(){
  this.service.getTopRatedMovies(1).subscribe((res)=>{
    this.topmovies=res.results.slice(0,6);
  })
}
fetchUpcommingMovies(){
  this.service.getUpcommingMovies(1).subscribe((res)=>{
    this.upcommingmovies=res.results.slice(0,6);
// this.movies=this.upcommingmovies
  })
}
fetchNowPlayingMovies(){
  this.service.getNowPlayingMovies(1).subscribe((res)=>{
    this.nowplyingmovies=res.results.slice(0,6);

  })
}
}

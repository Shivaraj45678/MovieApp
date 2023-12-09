import { Component } from '@angular/core';
import { MovieserviceService } from 'src/app/services/movieservice.service';

@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.css']
})
export class PopularMoviesComponent {
  ngOnInit(){
    this.getMovies();
  }
constructor(private servvice:MovieserviceService){
}
getMovies(){
  this.servvice.getMoviesBySorting().subscribe((data)=>{
    console.log(data)
  })
}
}

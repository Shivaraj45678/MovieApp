import { Component, OnInit } from '@angular/core';
import { MovieserviceService } from '../services/movieservice.service';
import { Movie } from '../model';
import { Router } from '@angular/router';
import { Video } from '../model';
import { ActivatedRoute } from '@angular/router';
import { SortedMoviesListService } from '../services/sorted-movies-list.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  carousel: any;
  constructor(
    private movieservice: SortedMoviesListService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

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
    this.carouselImg(1);
  }

  carouselImg(page: number) {
    this.movieservice.getNowPlayingMovies(page).subscribe((res: any) => {
      this.carousel = res.results;
      // console.log(this.carousel);
    });
  }
}

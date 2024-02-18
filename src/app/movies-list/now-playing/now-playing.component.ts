import { Component } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieserviceService } from 'src/app/services/movieservice.service';
import { SortedMoviesListService } from 'src/app/services/sorted-movies-list.service';

@Component({
  selector: 'app-now-playing',
  templateUrl: './now-playing.component.html',
  styleUrls: ['./now-playing.component.css']
})
export class NowPlayingComponent {
  dataSource = new MatTableDataSource<any>();
  page = 1;
  totalPages = 1;
  loading = true; // Add a loading flag

  ngOnInit() {
    this.fetchNowPlayingMovies(this.page);
  }

  constructor(private service: SortedMoviesListService, private route: ActivatedRoute, private sanitizer: DomSanitizer, private router: Router) {}

  fetchNowPlayingMovies(page: number) {
    this.loading = true;
    this.service.getNowPlayingMovies(page).subscribe((data: any) => {

        this.loading = false;

      this.dataSource.data = data.results;



      this.totalPages = data.total_pages;
    });
  }



  onPageChange(event: any) {
    this.page = event.pageIndex + 1;
    this.fetchNowPlayingMovies(this.page);
  }
}

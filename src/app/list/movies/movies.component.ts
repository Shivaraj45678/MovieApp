import { Component, OnInit } from '@angular/core';
import { SortedMoviesListService } from 'src/app/services/sorted-movies-list.service';

interface Languages {
  keyword: string;
  name: string;
}
interface City {
  name: string;
  code: string;
}
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit{
  genres: any;
selectedGenre: any;
  la: any;
selectedLanguage: any;
years: number[] = [];
panelOpenState = false;
selectedYear: any;
  constructor(private sortService:SortedMoviesListService){

  }
  languages:Languages[]= [
    { keyword: 'te', name: 'Telugu' },
    { keyword: 'kn', name: 'Kannada' },
    { keyword: 'ta', name: 'Tamil' },
    { keyword: 'ml', name: 'Malayalam' },
    { keyword: 'hi', name: 'Hindi' },
    { keyword: 'en', name: 'English' }

  ];
//   ngOnInit(): void {
//     const currentYear = new Date().getFullYear();
//     const startYear = currentYear - 100; // Or set your desired start year
//     const endYear = currentYear ; // Or set your desired end year
//     for (let year = endYear; year >= startYear; year--) {
//       this.years.push(year);
//     }


//    this.sortService.getMoviesGenresList().subscribe((res)=>{
//     this.genres=res.genres
//     this.languages=this.languages
// console.log(this.genres.name)

//    })
//   }
  clic(){
    console.log(this.selectedGenre.id)

    console.log(this.selectedLanguage.keyword)
    console.log(this.selectedYear)
  }
  cities: City[] | undefined;

    selectedCity: City | undefined;

    ngOnInit() {
        this.cities = [
            { name: 'New York', code: 'NY' },
            { name: 'Rome', code: 'RM' },
            { name: 'London', code: 'LDN' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Paris', code: 'PRS' }
        ];
    }

}

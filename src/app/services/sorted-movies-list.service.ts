import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SortedMoviesListService {

  constructor(private http:HttpClient) { }
  getNowPlayingMovies(page:number){
    const headers=new HttpHeaders({
      accept: 'application/json',
   Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NGRkYTlmMWM1MzcyYzU0ZDQ5N2ExNjVjNDMwMWI4NyIsInN1YiI6IjY0ODE4YmEwZDJiMjA5MDBlYmJmMDE4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bdC5ud4tCDqssKF77_RLdhgWHOlupRJmapa_DeZe7gQ'
     });
   const options={headers:headers}
   return this.http.get<any>(`https://api.themoviedb.org/3/movie/now_playing?language=te-IN&page=${page}`,options);
  }
  getTopRatedMovies(page:number){
    const headers=new HttpHeaders({
      accept: 'application/json',
   Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NGRkYTlmMWM1MzcyYzU0ZDQ5N2ExNjVjNDMwMWI4NyIsInN1YiI6IjY0ODE4YmEwZDJiMjA5MDBlYmJmMDE4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bdC5ud4tCDqssKF77_RLdhgWHOlupRJmapa_DeZe7gQ'
     });
   const options={headers:headers}
   return this.http.get<any>(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&${page}`,options);
  }
  getUpcommingMovies(page:number){
    const headers=new HttpHeaders({
      accept: 'application/json',
   Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NGRkYTlmMWM1MzcyYzU0ZDQ5N2ExNjVjNDMwMWI4NyIsInN1YiI6IjY0ODE4YmEwZDJiMjA5MDBlYmJmMDE4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bdC5ud4tCDqssKF77_RLdhgWHOlupRJmapa_DeZe7gQ'
     });
   const options={headers:headers}
   return this.http.get<any>(`https://api.themoviedb.org/3/movie/upcoming?language=en-US${page}`,options);
  }
  getMoviesBySorting(){
    const headers=new HttpHeaders({
      accept: 'application/json',
   Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NGRkYTlmMWM1MzcyYzU0ZDQ5N2ExNjVjNDMwMWI4NyIsInN1YiI6IjY0ODE4YmEwZDJiMjA5MDBlYmJmMDE4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bdC5ud4tCDqssKF77_RLdhgWHOlupRJmapa_DeZe7gQ'
     });
   const options={headers:headers}
   return this.http.get<any>(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=2&primary_release_year=2023&sort_by=primary_release_date.desc&with_original_language=kn`,options);
  }

}

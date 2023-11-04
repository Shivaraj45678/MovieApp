import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Movie } from '../model';
import { Video} from '../model';

@Injectable({
  providedIn: 'root'
})
export class MovieserviceService {

  // private apiKey = '84dda9f1c5372c54d497a165c4301b87';
  // private baseUrl = 'https://api.themoviedb.org/3';
movies:Movie[]=[];
  constructor(private http:HttpClient) { }


//   getMovieVideos(id:number): Observable<any> {

//   const url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=84dda9f1c5372c54d497a165c4301b87`;
//   return this.http.get<any>(url);
// }
getMovieVideos(id:string): Observable<any>{
  const headers=new HttpHeaders({
   accept: 'application/json',
Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NGRkYTlmMWM1MzcyYzU0ZDQ5N2ExNjVjNDMwMWI4NyIsInN1YiI6IjY0ODE4YmEwZDJiMjA5MDBlYmJmMDE4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bdC5ud4tCDqssKF77_RLdhgWHOlupRJmapa_DeZe7gQ'
  });
const options={headers:headers}
return this.http.get<any>(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US&api_key=8b92fe82ba9d18a8341368b3ac90c72b`,options);
 }
SearchMovie(query:String){
return this.http.get<any>(`https://www.omdbapi.com/?s=${query}&apikey=80dfd8aa&`);
}
//    SearchMovie(query:String){
//     const headers=new HttpHeaders({
//       accept: 'application/json',
//       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NGRkYTlmMWM1MzcyYzU0ZDQ5N2ExNjVjNDMwMWI4NyIsInN1YiI6IjY0ODE4YmEwZDJiMjA5MDBlYmJmMDE4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bdC5ud4tCDqssKF77_RLdhgWHOlupRJmapa_DeZe7gQ'
//     });
// const options={headers:headers}
//   return this.http.get<any>(`https://api.themoviedb.org/3/movie/${query}/reviews?language=en-US&page=1&api_key=84dda9f1c5372c54d497a165c4301b87`,options);
//    }
   getData(){
    const headers=new HttpHeaders({
      'X-RapidAPI-Key': '1ac23fd2cbmsh679278de25f0dc4p1f4370jsna9b8172addb8',
		'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
    });
const options={headers:headers}

return this.http.get<any>(`https://imdb-top-100-movies.p.rapidapi.com/`,options);
   }

getMovieByID(id:string):Observable<boolean> {
  return this.http.get<any>(`https://www.omdbapi.com/?i=${id}&apikey=80dfd8aa&`);
}
// getMovieByID(id:string):Observable<boolean> {
//   return this.http.get<any>(`https://yts.mx/api/v2/movie_details.json?imdb_id=${id}`);
// }

setMovies(movies:Movie[]){
  this.movies=movies;
}
getMovies(){
  return this.movies;
}
MovieReviews(id:string){
  const headers=new HttpHeaders({
    accept: 'application/json',
 Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NGRkYTlmMWM1MzcyYzU0ZDQ5N2ExNjVjNDMwMWI4NyIsInN1YiI6IjY0ODE4YmEwZDJiMjA5MDBlYmJmMDE4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bdC5ud4tCDqssKF77_RLdhgWHOlupRJmapa_DeZe7gQ'
   });
 const options={headers:headers}
 return this.http.get<any>(`https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&api_key=8b92fe82ba9d18a8341368b3ac90c72b`,options);
  }

MovieImages(id:string){
  const headers=new HttpHeaders({
   accept: 'application/json',
Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NGRkYTlmMWM1MzcyYzU0ZDQ5N2ExNjVjNDMwMWI4NyIsInN1YiI6IjY0ODE4YmEwZDJiMjA5MDBlYmJmMDE4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bdC5ud4tCDqssKF77_RLdhgWHOlupRJmapa_DeZe7gQ'
  });
const options={headers:headers}
return this.http.get<any>(`https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=8b92fe82ba9d18a8341368b3ac90c72b`,options);
 }
 moviecast(id:string){
  const headers=new HttpHeaders({
    accept: 'application/json',
 Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NGRkYTlmMWM1MzcyYzU0ZDQ5N2ExNjVjNDMwMWI4NyIsInN1YiI6IjY0ODE4YmEwZDJiMjA5MDBlYmJmMDE4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bdC5ud4tCDqssKF77_RLdhgWHOlupRJmapa_DeZe7gQ'
   });
 const options={headers:headers}
 return this.http.get<any>(`https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,options);
  }


  //actordetailes
  getactordetailes(id:string){
    const headers=new HttpHeaders({
     accept: 'application/json',
  Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NGRkYTlmMWM1MzcyYzU0ZDQ5N2ExNjVjNDMwMWI4NyIsInN1YiI6IjY0ODE4YmEwZDJiMjA5MDBlYmJmMDE4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bdC5ud4tCDqssKF77_RLdhgWHOlupRJmapa_DeZe7gQ'
    });
  const options={headers:headers}
  return this.http.get<any>(`https://api.themoviedb.org/3/person/${id}/movie_credits?language=en-US`,options);
   }

  getactorbio(id:string){

    const headers=new HttpHeaders({
      accept: 'application/json',
   Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NGRkYTlmMWM1MzcyYzU0ZDQ5N2ExNjVjNDMwMWI4NyIsInN1YiI6IjY0ODE4YmEwZDJiMjA5MDBlYmJmMDE4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bdC5ud4tCDqssKF77_RLdhgWHOlupRJmapa_DeZe7gQ'
     });
   const options={headers:headers}
   return this.http.get<any>(`https://api.themoviedb.org/3/person/${id}?language=en-US`,options);
    }

getNowPlayingMovies(page:number){
  const headers=new HttpHeaders({
    accept: 'application/json',
 Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NGRkYTlmMWM1MzcyYzU0ZDQ5N2ExNjVjNDMwMWI4NyIsInN1YiI6IjY0ODE4YmEwZDJiMjA5MDBlYmJmMDE4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bdC5ud4tCDqssKF77_RLdhgWHOlupRJmapa_DeZe7gQ'
   });
 const options={headers:headers}
 return this.http.get<any>(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${page}`,options);
}

}

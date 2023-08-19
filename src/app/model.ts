export class MoreDetailed {
  actors:string;
  constructor(actors:string) {
      this.actors=actors;
  }
}
export class Mdata{
g1:string;
g2:string;
g3:string;
g4:string;
constructor(g1:string,g2:string,g3:string,g4:string,){
this.g1=g1;
this.g2=g2;
this.g3=g3;
this.g4=g4;
}
}
export class Movie {

  id: string;
  title: string;
  url: string;
  year: string;
  type: string;


  constructor(id: string, title: string, url: string, year: string, type: string) {
      this.id = id;
      this.title = title;
      this.url = url;
      this.year = year;
      this.type = type;
  }
}
export interface Video{
  name:string;
  key:string;
  site:string;
}
export class game {
  game: string
  constructor(game: string) {
      this.game = game;

  }

}

import { Component } from '@angular/core';
import { MovieserviceService } from '../services/movieservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-actordetailes',
  templateUrl: './actordetailes.component.html',
  styleUrls: ['./actordetailes.component.css']
})
export class ActordetailesComponent {
detailes: any;
  actorbio: any;
constructor(private service:MovieserviceService,private router:Router,private route:ActivatedRoute){
  this.featchActorMovies();
  this.fetchActorbio();
}
ngOnInt(){

}
featchActorMovies(){
  const id =this.route.snapshot.paramMap.get('id');
  if (id !== null) {
  this.service.getactordetailes(id).subscribe((data:any)=>{
    this.detailes=data;
    console.log(this.detailes)

//     this.mdata=[];
//     for(let item of data){
// let detail=data[]
//     }
  });

}
}
fetchActorbio(){
  const id =this.route.snapshot.paramMap.get('id');
  if (id !== null) {
  this.service.getactorbio(id).subscribe((data:any)=>{
    this.actorbio=data;
    console.log(this.actorbio)

  });

}
}
}

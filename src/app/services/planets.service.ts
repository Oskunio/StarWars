import { WebService } from './web.service';
import { Injectable } from '@angular/core';
import { Planets } from '../models/planets.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {
  planets: Planets;
  planetsSub = new Subject<Planets>();
  constructor(private webService: WebService) {
    this.webService.getListOfPlanets().subscribe((planets: Planets)=> {
      //console.log(planets);
      this.planets = planets;
      this.planetsSub.next(this.planets);
    });
   }

   getListOfPlanets(){
     return this.planetsSub.asObservable();
   }
   changePage(url) {
     this.webService.makeGetRequest(url).subscribe((planets: Planets)=> {
      //console.log(planets);
      this.planets = planets;
      this.planetsSub.next(this.planets);
    });
   }


}

import { WebService } from './web.service';
import { Injectable } from '@angular/core';
import { Planets } from '../models/planets.model';
import { Subject } from 'rxjs';
import { Result } from '../models/result.model';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {
  planets: Planets;
  planetsSub = new Subject<Planets>();

  pageIndex:number;
  pageIndexSub = new Subject<number>();

  selectedPlanet: Result;
  selectedPlanetSub = new Subject<Result>();

  constructor(private webService: WebService) {
    this.initListOfPlanets();
   }

   initListOfPlanets() {
    this.webService.getListOfPlanets().subscribe((planets: Planets)=> {
      this.planets = planets;
      this.planets.results.sort((a,b) => a.name > b.name ? 1 : -1);
      this.pageIndex=0;
      this.planetsSub.next(this.planets);
      this.pageIndexSub.next(this.pageIndex);
    });
   }

   getListOfPlanets(){
     return this.planetsSub.asObservable();
   }
   sendListofPlanets() {
     this.planetsSub.next(this.planets);
   }

   getPageIndex() {
     return this.pageIndexSub.asObservable();
   }
   sendPageIndex() {
    this.pageIndexSub.next(this.pageIndex);
   }

   changePage(url, pageIndex) {
     this.webService.makeGetRequest(url).subscribe((planets: Planets)=> {
      this.pageIndex = pageIndex;
      this.planets = planets;
      this.planets.results.sort((a,b) => a.name > b.name ? 1 : -1);
      this.planetsSub.next(this.planets);
      this.pageIndexSub.next(this.pageIndex);
    });
   }

   getSelectedPlanet() {
     //this.selectedPlanetSub.next(this.selectedPlanet);
     return this.selectedPlanetSub.asObservable();
   }
   sendSelectedPlanet() {
    this.selectedPlanetSub.next(this.selectedPlanet);
   }
}

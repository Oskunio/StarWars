import { Film } from './../models/film.model';
import { Resident } from './../models/resident.model';
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

  pageIndex: number;
  pageIndexSub = new Subject<number>();

  selectedPlanet: Result;
  selectedPlanetSub = new Subject<Result>();

  selectedPlanetResidents: Resident[] =[];
  selectedPlanetResidentsSub = new Subject<Resident[]>();

  selectedPlanetFilms: Film[] = [];
  selectedPlanetFilmsSub = new Subject<Film[]>();

  constructor(private webService: WebService) {
    this.initListOfPlanets();
  }

  initListOfPlanets() {
    this.webService.getListOfPlanets().subscribe((planets: Planets) => {
      this.planets = planets;
      this.planets.results.sort((a, b) => a.name > b.name ? 1 : -1);
      this.pageIndex = 0;
      this.planetsSub.next(this.planets);
      this.pageIndexSub.next(this.pageIndex);
    });
  }

  getListOfPlanets() {
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
    this.webService.makeGetRequest(url).subscribe((planets: Planets) => {
      this.pageIndex = pageIndex;
      this.planets = planets;
      this.planets.results.sort((a, b) => a.name > b.name ? 1 : -1);
      this.planetsSub.next(this.planets);
      this.pageIndexSub.next(this.pageIndex);
    });
  }

  getSelectedPlanet() {
    return this.selectedPlanetSub.asObservable();
  }

  sendSelectedPlanet() {
    this.selectedPlanetSub.next(this.selectedPlanet);
  }
  getResidents() {
    return this.selectedPlanetResidentsSub.asObservable();
  }
  getFilms() {
    return this.selectedPlanetFilmsSub.asObservable();
  }
  sendResidents() {
    this.selectedPlanetResidentsSub.next(this.selectedPlanetResidents);
  }
  sendFilms() {
    this.selectedPlanetFilmsSub.next(this.selectedPlanetFilms);
  }

  // get residents and films details
  getPlanetDetails() {
    this.selectedPlanetResidents = [];
    this.selectedPlanetFilms = [];
    for (let resident of this.selectedPlanet.residents) {
      this.webService.makeGetRequest(resident).subscribe((res: Resident) => {
        this.selectedPlanetResidents.push(res);
        this.sendResidents();
      });
    }

    for (let film of this.selectedPlanet.films) {
      this.webService.makeGetRequest(film).subscribe((res: Film) => {
       this.selectedPlanetFilms.push(res);
       this.sendFilms();
      });
    }

  }
}

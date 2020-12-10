
import { PlanetsService } from './../../services/planets.service';
import { Component, OnInit } from '@angular/core';
import { Result } from 'src/app/models/result.model';
import { Film } from 'src/app/models/film.model';
import { Resident } from 'src/app/models/resident.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-planet-details',
  templateUrl: './planet-details.component.html',
  styleUrls: ['./planet-details.component.scss']
})
export class PlanetDetailsComponent implements OnInit {

  planet: Result;
  films: Film[];
  residents: Resident[];
  constructor(private planetsService: PlanetsService, private route: ActivatedRoute) { }

  ngOnInit(): void {

      this.planetsService.getPlanetDetails();
      this.getPlanet();
      this.getFilms();
      this.getResidents();
      this.planetsService.sendSelectedPlanet();

  }

  getPlanet(){
    this.planetsService.getSelectedPlanet().subscribe((planet: Result) => {
      this.planet = planet;

    });
  }
  getResidents() {
    this.planetsService.getResidents().subscribe((residents: Resident[]) => {
      this.residents = residents;
    });
  }
  getFilms() {
    this.planetsService.getFilms().subscribe((films: Film[]) => {
      this.films = films;
    });
  }


}

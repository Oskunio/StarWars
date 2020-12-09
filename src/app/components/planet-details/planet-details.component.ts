import { PlanetsService } from './../../services/planets.service';
import { Component, OnInit } from '@angular/core';
import { Result } from 'src/app/models/result.model';

@Component({
  selector: 'app-planet-details',
  templateUrl: './planet-details.component.html',
  styleUrls: ['./planet-details.component.scss']
})
export class PlanetDetailsComponent implements OnInit {

  planet: Result;
  constructor(private planetsService: PlanetsService) { }

  ngOnInit(): void {
    this.getPlanet();
    console.log(this.planetsService.selectedPlanet);
    this.planetsService.sendSelectedPlanet();
  }

  getPlanet(){
    this.planetsService.getSelectedPlanet().subscribe((planet: Result) => {
      this.planet = planet;
      console.log(planet);
    });
  }

}

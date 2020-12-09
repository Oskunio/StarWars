import { PlanetsService } from './../../services/planets.service';
import { PageEvent } from '@angular/material/paginator';
import { Component, OnInit } from '@angular/core';
import { Planets } from 'src/app/models/planets.model';
import { Result } from 'src/app/models/result.model';

@Component({
  selector: 'app-planets-list',
  templateUrl: './planets-list.component.html',
  styleUrls: ['./planets-list.component.scss']
})
export class PlanetsListComponent implements OnInit {
  planets: Planets;
  pageSize=10;
  pageIndex: number;
  constructor(private planetsService: PlanetsService) { }

  ngOnInit(): void {

    this.getPlanets();
    this.getPageIndex();

    // after previous page button click send again data
    if(this.planets == undefined) {
      this.planetsService.sendListofPlanets();
      this.planetsService.sendPageIndex();
    }

  }
  getPlanets() {
    this.planetsService.getListOfPlanets().subscribe((planets: Planets)=> {
      this.planets = planets;
    });
  }
  getPageIndex() {
    this.planetsService.getPageIndex().subscribe((index:number) => {
      this.pageIndex = index;
    });
  }

  onPageChange(event: PageEvent) {
    console.log(event);
    if(event.pageIndex > event.previousPageIndex) {
      // request next page
      this.planetsService.changePage(this.planets.next, event.pageIndex);
    } else {
      // request previous page
      this.planetsService.changePage(this.planets.previous, event.pageIndex);

    }
  }

  selectPlanet(planet: Result) {
    this.planetsService.selectedPlanet = planet;
  }

}

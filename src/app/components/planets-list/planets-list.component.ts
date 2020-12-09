import { PlanetsService } from './../../services/planets.service';
import { PageEvent } from '@angular/material/paginator';
import { Component, OnInit } from '@angular/core';
import { Planets } from 'src/app/models/planets.model';

@Component({
  selector: 'app-planets-list',
  templateUrl: './planets-list.component.html',
  styleUrls: ['./planets-list.component.scss']
})
export class PlanetsListComponent implements OnInit {
  planets: Planets;
  pageSize=10;
  constructor(private planetsService: PlanetsService) { }

  ngOnInit(): void {
    // init request
    this.getPlanets();
  }
  getPlanets() {
    this.planetsService.getListOfPlanets().subscribe((planets: Planets)=> {
      console.log(planets);
      this.planets = planets;
    });
  }

  onPageChange(event: PageEvent) {
    console.log(event);
    if(event.pageIndex > event.previousPageIndex) {
      // request next page
      this.planetsService.changePage(this.planets.next);
    } else {
      // request previous page
      this.planetsService.changePage(this.planets.previous);
    }
  }

}

import { PageEvent } from '@angular/material/paginator';
import { WebService } from './../../services/web.service';
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
  constructor(private webService: WebService) { }

  ngOnInit(): void {
    // init request
    this.webService.getListOfPlanets().subscribe((planets: Planets)=> {
      console.log(planets);
      this.planets = planets;
    });
  }

  onPageChange(event: PageEvent) {
    console.log(event);
    if(event.pageIndex > event.previousPageIndex) {
      // request o następną strone
      this.webService.makeGetRequest(this.planets.next).subscribe((planets: Planets) => {
        console.log(planets);
        this.planets = planets;
      });
    } else {
      // request o poprzednią stronę
      this.webService.makeGetRequest(this.planets.previous).subscribe((planets: Planets) => {
        console.log(planets);
        this.planets = planets;
      });
    }
  }

}

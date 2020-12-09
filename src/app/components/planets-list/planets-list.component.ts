import { WebService } from './../../services/web.service';
import { Component, OnInit } from '@angular/core';
import { Planets } from 'src/app/models/planets.model';

@Component({
  selector: 'app-planets-list',
  templateUrl: './planets-list.component.html',
  styleUrls: ['./planets-list.component.scss']
})
export class PlanetsListComponent implements OnInit {

  constructor(private webService: WebService) { }

  ngOnInit(): void {
    this.webService.getListOfPlanets().subscribe((planets: Planets)=> {
      console.log(planets);
    });
  }

}

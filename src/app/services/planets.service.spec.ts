import { HttpClientModule } from '@angular/common/http';
import { WebService } from './web.service';
import { TestBed } from '@angular/core/testing';

import { PlanetsService } from './planets.service';
import {PLANETS_LIST} from '../mockData/planets.mock';
import { of } from 'rxjs';

describe('PlanetsService', () => {
  let service: PlanetsService;
  let webService: WebService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [WebService]
    });
    service = TestBed.inject(PlanetsService);
    webService = TestBed.inject(WebService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('get planet list', ()=> {
    spyOn(webService, 'getListOfPlanets').and.returnValue(of(PLANETS_LIST));
    service.initListOfPlanets();
    expect(service.planets).toEqual(PLANETS_LIST);
  });
});

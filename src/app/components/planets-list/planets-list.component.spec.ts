import { WebService } from './../../services/web.service';
import { PlanetsService } from './../../services/planets.service';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetsListComponent } from './planets-list.component';

import { of } from 'rxjs';

describe('PlanetsListComponent', () => {
  let component: PlanetsListComponent;
  let fixture: ComponentFixture<PlanetsListComponent>;
  let planetService: PlanetsService;
  let webService: WebService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanetsListComponent ],
      imports: [HttpClientModule],
      providers: [PlanetsService, WebService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetsListComponent);
    component = fixture.componentInstance;
    planetService = TestBed.inject(PlanetsService);
    webService = TestBed.inject(WebService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });



});

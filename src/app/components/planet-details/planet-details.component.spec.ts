import { PlanetsService } from './../../services/planets.service';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetDetailsComponent } from './planet-details.component';
import { of } from 'rxjs';

describe('PlanetDetailsComponent', () => {
  let component: PlanetDetailsComponent;
  let fixture: ComponentFixture<PlanetDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanetDetailsComponent ],
      imports: [HttpClientModule],
      providers: [PlanetsService,
        {
        provide: ActivatedRoute,
        useValue: {
          paramMap: of(convertToParamMap({numer: 1}))
        }
      }]
    })
    .compileComponents();
  });



  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

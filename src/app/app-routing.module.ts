import { PlanetsListComponent } from './components/planets-list/planets-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanetDetailsComponent } from './components/planet-details/planet-details.component';

const routes: Routes = [
  {
    path:'listOfPlanets', component: PlanetsListComponent
  },
  {
    path:'planet', component: PlanetDetailsComponent
  },
  {
    path: '',
    redirectTo: 'listOfPlanets',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

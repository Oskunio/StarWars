import { Resident } from './resident.model';
import { Film } from './film.model';
export class Result {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[] | Resident[];
  films: string[] | Film[];
  created: string;
  edited: string;
  url: string;
}

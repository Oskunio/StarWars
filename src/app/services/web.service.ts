import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WebService {
  readonly url = 'https://swapi.dev/api';
  constructor(private http: HttpClient) { }

  getListOfPlanets() {
    return this.http.get(`${this.url}/planets`);
  }
}

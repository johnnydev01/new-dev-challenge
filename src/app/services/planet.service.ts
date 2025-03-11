import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Planet } from '../interfaces/planet';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {
  private baseUrl = environment.swapiBaseUrl;

  constructor(private http: HttpClient) { }


  getPeople(): Observable<Planet[]> {
    return this.http.get<Planet[]>(`${this.baseUrl}/planets/`)
      .pipe(
        map((response: any) => response.results)
      );
  }
}

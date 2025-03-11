import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Starship } from '../interfaces/starships';

@Injectable({
  providedIn: 'root'
})
export class StarshipService {
  private baseUrl = environment.swapiBaseUrl;

  constructor(private http: HttpClient) { }


  getSpecies(): Observable<Starship[]> {
    return this.http.get<Starship[]>(`${this.baseUrl}/starships/`)
      .pipe(
        map((response: any) => response.results)
      );
  }
}

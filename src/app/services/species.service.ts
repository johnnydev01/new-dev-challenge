import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Species } from '../interfaces/species';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpeciesService {
private baseUrl = environment.swapiBaseUrl;

  constructor(private http: HttpClient) { }


  getSpecies(): Observable<Species[]> {
    return this.http.get<Species[]>(`${this.baseUrl}/species/`)
      .pipe(
        map((response: any) => response.results)
      );
  }
}

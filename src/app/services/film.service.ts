import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Film } from '../interfaces/filme';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  private baseUrl = environment.swapiBaseUrl;

  constructor(private http: HttpClient) { }

    getFilms(): Observable<Film[]> {
      return this.http.get<Film[]>(`${this.baseUrl}/films/`)
        .pipe(
          map((response: any) => response.results)
        );
    }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Person } from '../interfaces/person';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {


  private baseUrl = environment.swapiBaseUrl;

  constructor(private http: HttpClient) { }


  getPeople(): Observable<Person[]> {
    return this.http.get<Person[]>(`${this.baseUrl}/people/`)
      .pipe(
        map((response: any) => response.results)
      );
  }
}

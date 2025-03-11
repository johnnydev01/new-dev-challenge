import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';


export interface Root {
  category: string;
  url: string;
}
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private baseUrl = environment.swapiBaseUrl;

  constructor(private http: HttpClient) { }


  getRoot(): Observable<Root[]> {
    return this.http.get<Root[]>(`${this.baseUrl}`)
    .pipe(
      map((response: any) => {
        return Object.keys(response).map((item, index) => {
          return {
            category: item,
            url: response[item] as string
          };
        })
      },
    )
    );
  }

  getResource<T>(resourceUrl: string): Observable<T> {
    return this.http.get<T>(resourceUrl);
  }

}

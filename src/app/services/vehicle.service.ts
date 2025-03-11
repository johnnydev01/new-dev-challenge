import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Vehicle } from '../interfaces/vehicle';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  private baseUrl = environment.swapiBaseUrl;

  constructor(private http: HttpClient) { }


  getVehicles(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(`${this.baseUrl}/vehicles/`)
      .pipe(
        map((response: any) => response.results)
      );
  }
}

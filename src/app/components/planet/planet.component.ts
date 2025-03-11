import { Component, inject, OnInit } from '@angular/core';
import { PlanetService } from '../../services/planet.service';
import { Data } from '../../interfaces/category';
import { Planet } from '../../interfaces/planet';
import { AsyncPipe } from '@angular/common';
import { LoadingComponent } from '../loading/loading.component';
import { PlanetCardComponent } from '../planet-card/planet-card.component';

@Component({
  selector: 'app-planet',
  standalone: true,
  imports: [
    AsyncPipe,
    PlanetCardComponent,
    LoadingComponent,
  ],
  templateUrl: './planet.component.html',
  styleUrl: './planet.component.scss'
})
export class PlanetComponent implements OnInit{

    private planetService = inject(PlanetService);
    public planet!: Planet[]
    public planetData =  Array<Data>();

    ngOnInit() {
      this.getPeople();
    }

    getPeople() {
      this.planetService.getPeople()
      .subscribe({
        next: (planet: Planet[]) => {
          this.planet = planet;
          planet.map((item) => {
            this.planetData.push({
              name: item.name,
              url: item.url
            })
          })
        }
      })
    }

}
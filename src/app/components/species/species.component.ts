import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { LoadingComponent } from '../loading/loading.component';
import { PlanetCardComponent } from '../planet-card/planet-card.component';
import { Species } from '../../interfaces/species';
import { Data } from '../../interfaces/category';
import { SpeciesService } from '../../services/species.service';
import { SpeciesCardComponent } from '../species-card/species-card.component';

@Component({
  selector: 'app-species',
  standalone: true,
  imports: [
    AsyncPipe,
    SpeciesCardComponent,
    LoadingComponent,
  ],
  templateUrl: './species.component.html',
  styleUrl: './species.component.scss'
})
export class SpeciesComponent {

  private speciesService = inject(SpeciesService);
  public species!: Species[]
  public speciesData =  Array<Data>();

  ngOnInit() {
    this.getSpecies();
  }

  getSpecies() {
    this.speciesService.getSpecies()
    .subscribe({
      next: (species: Species[]) => {
        this.species = species;
        species.map((item) => {
          this.speciesData.push({
            name: item.name,
            url: item.url
          })
        })
      }
    })
  }
}

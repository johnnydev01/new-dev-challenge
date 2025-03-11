import { Component, inject } from '@angular/core';
import { StarshipService } from '../../services/starship.service';
import { Data } from '../../interfaces/category';
import { AsyncPipe } from '@angular/common';
import { LoadingComponent } from '../loading/loading.component';
import { StarshipCardComponent } from '../starship-card/starship-card.component';
import { Starship } from '../../interfaces/starships';

@Component({
  selector: 'app-starship',
  standalone: true,
  imports: [
    AsyncPipe,
    StarshipCardComponent,
    LoadingComponent,
],
  templateUrl: './starship.component.html',
  styleUrl: './starship.component.scss'
})
export class StarshipComponent {
 private starshipService = inject(StarshipService);
  public starships!: Starship[]
  public starshipsData =  Array<Data>();

  ngOnInit() {
    this.getStarships();
  }

  getStarships() {
    this.starshipService.getSpecies()
    .subscribe({
      next: (starships: Starship[]) => {
        this.starships = starships;
        starships.map((item) => {
          this.starshipsData.push({
            name: item.name,
            url: item.url
          })
        })
      }
    })
  }
}

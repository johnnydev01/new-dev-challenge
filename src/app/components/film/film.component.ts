import { Component, inject } from '@angular/core';
import { FilmService } from '../../services/film.service';
import { FilmCardComponent } from '../film-card/film-card.component';
import { AsyncPipe } from '@angular/common';
import { LoadingComponent } from '../loading/loading.component';
import { Film } from '../../interfaces/filme';
import { Data } from '../../interfaces/category';

@Component({
  selector: 'app-film',
  standalone: true,
  imports: [
    AsyncPipe,
    FilmCardComponent,
    LoadingComponent,
  ],
  templateUrl: './film.component.html',
  styleUrl: './film.component.scss'
})
export class FilmComponent {
 private filmService = inject(FilmService);
    public film!: Film[]
    public filmsData =  Array<Data>();

    ngOnInit() {
      this.getPeople();
    }

    getPeople() {
      this.filmService.getFilms()
      .subscribe({
        next: (film: Film[]) => {
          this.film = film;
          film.map((item) => {
            this.filmsData.push({
              name: item.title,
              url: item.url
            })
          })
        }
      })
    }
}

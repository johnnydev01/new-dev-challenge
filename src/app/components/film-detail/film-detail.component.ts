import { DatePipe, Location } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { Planet } from '../../interfaces/planet';
import { Film } from '../../interfaces/filme';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-film-detail',
  standalone: true,
  imports: [
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    RouterLink,
    MatIconModule,
    DatePipe
  ],
  templateUrl: './film-detail.component.html',
  styleUrl: './film-detail.component.scss'
})
export class FilmDetailComponent {


  constructor(private location: Location) {}

  private categoryService = inject(CategoryService);

  resourceUrl!: string;
  public title = "Detalhes do Filme"
  public film!: Film;
  ngOnInit(): void {
    this.resourceUrl = history.state.url;
    this.getResource();

  }

  getResource() {
    this.categoryService.getResource<Film>(this.resourceUrl)
    .subscribe({
      next: (data) => {
        this.film = data;
      }
    })
  }

  back() {
    this.location.back();
  }
}

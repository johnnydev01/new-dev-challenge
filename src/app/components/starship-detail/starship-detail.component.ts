import { Starship } from './../../interfaces/starships';
import { Location } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-starship-detail',
  standalone: true,
  imports: [
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    RouterLink,
    MatIconModule
  ],
  templateUrl: './starship-detail.component.html',
  styleUrl: './starship-detail.component.scss'
})
export class StarshipDetailComponent {
  constructor(private location: Location) {}

  private categoryService = inject(CategoryService);

  resourceUrl!: string;
  public title = "Detalhes da Nave Espacial"
  public starship!: Starship;
  ngOnInit(): void {
    this.resourceUrl = history.state.url;
    this.getResource();

  }

  getResource() {
    this.categoryService.getResource<Starship>(this.resourceUrl)
    .subscribe({
      next: (data) => {
        this.starship = data;
      }
    })
  }

  back() {
    this.location.back();
  }
}

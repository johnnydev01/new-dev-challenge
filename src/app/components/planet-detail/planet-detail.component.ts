import { Component, inject } from '@angular/core';
import { Planet } from '../../interfaces/planet';
import { CategoryService } from '../../services/category.service';
import { Location } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-planet-detail',
  standalone: true,
  imports: [
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    RouterLink,
    MatIconModule

  ],
  templateUrl: './planet-detail.component.html',
  styleUrl: './planet-detail.component.scss'
})
export class PlanetDetailComponent {
  constructor(private location: Location) {}

  private categoryService = inject(CategoryService);

  resourceUrl!: string;
  public title = "Detalhes do Planeta"
  public planet!: Planet;
  ngOnInit(): void {
    this.resourceUrl = history.state.url;
    this.getResource();

  }

  getResource() {
    this.categoryService.getResource<Planet>(this.resourceUrl)
    .subscribe({
      next: (data) => {
        this.planet = data;
      }
    })
  }

  back() {
    this.location.back();
  }
}

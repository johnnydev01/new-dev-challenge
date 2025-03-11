import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { Species } from '../../interfaces/species';
import { CategoryService } from '../../services/category.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-species-detail',
  standalone: true,
  imports: [
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    RouterLink,
    MatIconModule
  ],
  templateUrl: './species-detail.component.html',
  styleUrl: './species-detail.component.scss'
})
export class SpeciesDetailComponent {
  constructor(private location: Location) {}

  private categoryService = inject(CategoryService);

  resourceUrl!: string;
  public title = "Detalhes da Especie"
  public species!: Species;
  ngOnInit(): void {
    this.resourceUrl = history.state.url;
    this.getResource();

  }

  getResource() {
    this.categoryService.getResource<Species>(this.resourceUrl)
    .subscribe({
      next: (data) => {
        this.species = data;
      }
    })
  }

  back() {
    this.location.back();
  }
}

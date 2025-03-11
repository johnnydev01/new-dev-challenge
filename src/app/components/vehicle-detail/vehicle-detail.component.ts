import { Component, inject } from '@angular/core';
import { Vehicle } from '../../interfaces/vehicle';
import { CategoryService } from '../../services/category.service';
import { Location } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-vehicle-detail',
  standalone: true,
  imports: [
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    RouterLink,
    MatIconModule
  ],
  templateUrl: './vehicle-detail.component.html',
  styleUrl: './vehicle-detail.component.scss'
})
export class VehicleDetailComponent {
  constructor(private location: Location) {}

  private categoryService = inject(CategoryService);

  resourceUrl!: string;
  public title = "Detalhes da Especie"
  public vehicle!: Vehicle;
  ngOnInit(): void {
    this.resourceUrl = history.state.url;
    this.getResource();

  }

  getResource() {
    this.categoryService.getResource<Vehicle>(this.resourceUrl)
    .subscribe({
      next: (data) => {
        this.vehicle = data;
      }
    })
  }

  back() {
    this.location.back();
  }
}
